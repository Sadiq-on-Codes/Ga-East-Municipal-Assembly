import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { BlogPost } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../admin/admin.entity';
import APIFeatures from 'src/apiFeatures/apiFeatures';
import { UpdatePostDto } from './input/updatePostDto';
import { CreatePostDto } from './input/createPostDto';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);
  constructor(
    @InjectRepository(BlogPost)
    private postRepository: Repository<BlogPost>,

    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}

  async getAllPosts(queryParams): Promise<BlogPost[] | any> {
    const queryBuilder = this.postRepository.createQueryBuilder();

    // Apply filters
    const apiFeatures = new APIFeatures(queryBuilder, queryParams)

      .filter()
      .sort()
      .limitFields()
      .paginate();

    // Execute query
    const [posts, totalLength] = await apiFeatures.getQuery().getManyAndCount();

    if (!posts) {
      throw new NotFoundException(`No post to show`);
    }
    return [{ totalLength }, posts];
  }
  async getPostsByCreatedAt(days: number): Promise<BlogPost[]> {
    const currentDate = new Date();
    const pastDate = new Date(
      currentDate.getTime() - days * 24 * 60 * 60 * 1000,
    );
    return this.postRepository.find({
      where: { createdAt: MoreThanOrEqual(pastDate) },
    });
  }

  async getPostById(postId: number) {
    const post = await this.postRepository.findOne({
      where: {
        id: postId,
      },
      relations: ['comments', 'comments.user'],
    });

    if (!post) {
      throw new NotFoundException(`No post found`);
    }
    return post;
  }

  async createPost(
    postDto: CreatePostDto,
  ): Promise<[{ message: string }, BlogPost]> {
    try {
      const { title, article, image, category } = postDto;

      const post = new BlogPost();
      post.title = title;
      post.article = article;
      post.image = image;
      post.category = category;
      post.createdAt = new Date();
      const createdPost = await this.postRepository.save(post);

      this.logger.log(`New post with id ${createdPost.id} has been created.`);

      return [{ message: 'new post created' }, createdPost];
    } catch (error) {
      this.logger.error(
        `Error occurred while creating a new post. Error: ${error}`,
      );
      throw error;
    }
  }

  async updatePost(
    postId: number,
    updatePostDto: UpdatePostDto,
  ): Promise<[{ message: string }, BlogPost]> {
    const post = await this.postRepository.findOne({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    // Update the post fields based on the data in updatePostDto
    post.title = updatePostDto.title || post.title;
    post.article = updatePostDto.article || post.article;
    post.image = updatePostDto.image || post.image;
    post.category = updatePostDto.category || post.category;
    post.updatedAt = new Date();

    return [
      { message: `Post updated successfully` },
      await this.postRepository.save(post),
    ];
  }

  async deletePostById(postId: number): Promise<string> {
    try {
      const result = await this.postRepository.delete(postId);

      if (result.affected === 0) {
        throw new NotFoundException(`Post with ID ${postId} not found`);
      }
      return 'Post deleted successfully';
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
