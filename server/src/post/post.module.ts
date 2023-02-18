import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { BlogPost } from './post.entity';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost]), AdminModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [TypeOrmModule.forFeature([BlogPost])],
})
export class PostModule {}
