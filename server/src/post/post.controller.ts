import { Controller, Get, Param } from '@nestjs/common';
import { Post } from './post.entity';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAll(): Promise<Post[]> {
    return this.postService.getAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Post> {
    return this.postService.getPostById(id);
  }
}
