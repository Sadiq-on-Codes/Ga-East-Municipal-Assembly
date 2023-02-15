import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from '../post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [TypeOrmModule.forFeature([Admin])],
})
export class AdminModule {}
