import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../admin/admin.entity';
import { CreatePost } from './input/createPostDto';
import { PostDto } from './input/postDto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,

    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}

  async getAll(): Promise<Post[]> {
    return this.postRepository.find({
      //  relations: ['comments'],
    });
  }

  async getPostById(postId: number) {
    return this.postRepository.findOne({
      where: {
        id: postId,
      },
      relations: ['comments', 'comments.user'],
    });
  }

  async create(postDto: CreatePost, adminId: number): Promise<Post> {
    const { title, article, image, category } = postDto;
    const admin = await this.adminRepository.findOne({
      where: {
        id: adminId,
      },
    });

    if (!admin) {
      throw new ForbiddenException(
        null,
        `You are not authorized to make a post`,
      );
    }
    const post = new Post();
    post.title = title;
    post.article = article;
    post.image = image;
    post.category = category;
    post.createdAt = new Date();
    post.admin = admin;

    const createdPost = await this.postRepository.save(post);
    return createdPost;
  }
}
