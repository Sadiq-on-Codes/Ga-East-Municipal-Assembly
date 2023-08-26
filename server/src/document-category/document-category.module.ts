import { Module } from '@nestjs/common';
import { DocumentCategoryService } from './document-category.service';
import { DocumentCategoryController } from './document-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentCategory } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentCategory])],
  providers: [DocumentCategoryService],
  controllers: [DocumentCategoryController],
})
export class DocumentCategoryModule {}
