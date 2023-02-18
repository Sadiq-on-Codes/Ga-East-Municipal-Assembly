import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { User } from '../user/user.entity';
import { CommentDto } from './input/comment.dto';
import { BlogPost } from '../post/post.entity';

@Injectable()
export class CommentService {
  private readonly logger = new Logger(CommentService.name);

  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(BlogPost)
    private postRepository: Repository<BlogPost>,
  ) {}
  async createComment(
    postId: number,
    commentDto: CommentDto,
  ): Promise<Comment> {
    this.logger.debug(
      `create() called with CommentDto: ${commentDto}, postId: ${postId}`,
    );

    //destructing of dto from input folder
    const { email, name, website, message } = commentDto;

    let user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    //if user is commenting for first time, this snippets saves credentials into the user table
    if (!user) {
      user = this.userRepository.create({ name, email, website });
      await this.userRepository.save(user);
    }

    //find the post we want to comment under
    this.logger.debug(`findOne() called with id: ${postId}`);
    const post = await this.postRepository.findOne({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID "${postId}" not found`);
    }

    //saves users comment in comment table

    const comment = await this.commentRepository.create({
      post,
      message,
      user,
    });

    this.logger.debug(`Saving comment: ${comment}`);
    await this.commentRepository.save(comment);
    return comment;
  }

  //retrieves all comment for a particular post
  async getCommentsForPost(postId: number) {
    return this.commentRepository.find({ where: { post: { id: postId } } });
  }
}
