import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePostDto } from './input/createPostDto';
import { UpdatePostDto } from './input/updatePostDto';

import { BlogPost } from './post.entity';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  private readonly logger = new Logger(PostController.name);
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAll(@Query() query: any): Promise<BlogPost[]> {
    this.logger.debug(`Fetching all post`);
    // Use the apiFeatures class to filter, sort, and limit the results
    return this.postService.getAllPosts(query);
  }

  @Get('/within-days')
  async getPostsByDays(@Query('days') days: number): Promise<BlogPost[]> {
    const posts = await this.postService.getPostsByCreatedAt(days);
    if (!posts.length) {
      throw new NotFoundException('No posts found');
    }
    return posts;
  }
  @Get(':id')
  async findById(@Param('id') id: number): Promise<BlogPost> {
    this.logger.debug(`Fetching post with id ${id}`);
    return this.postService.getPostById(id);
  }

  @Post('create/post')
  async createPost(
    @Body() postDto: CreatePostDto,
  ): Promise<[{ message: string }, BlogPost]> {
    return await this.postService.createPost(postDto);
  }

  @Patch('update/:id')
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    try {
      const updatedPost = await this.postService.updatePost(id, updatePostDto);
      if (!updatedPost) {
        throw new NotFoundException(`Post with id ${id} not found`);
      }
      this.logger.log(`Post with id ${id} updated successfully`);
      return updatedPost;
    } catch (error) {
      this.logger.error(`Error updating post with id ${id}: ${error.message}`);
      throw error;
    }
  }

  @Delete('delete/:id')
  async deletePostById(@Param('id') postId: number): Promise<string> {
    return await this.postService.deletePostById(postId);
  }
}
