import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { DocumentCategoryService } from './document-category.service';
import { DocumentCategory } from './category.entity';
import { CategorytDto } from './input/category.dto';
import { UpdateCategorytDto } from './input/update-category.dto';

@Controller('document-category')
export class DocumentCategoryController {
  private readonly logger = new Logger(DocumentCategoryController.name);
  constructor(
    private readonly documentCategoryService: DocumentCategoryService,
  ) {}

  @Get()
  async getAll(@Query() query: any): Promise<DocumentCategory[]> {
    this.logger.debug(`Fetching all Categories`);
    // Use the apiFeatures class to filter, sort, and limit the results
    return this.documentCategoryService.getAllCategories(query);
  }
  @Get(':id')
  async findById(@Param('id') id: number): Promise<DocumentCategory> {
    this.logger.debug(`Fetching category with id ${id}`);
    return this.documentCategoryService.getCategoryById(id);
  }

  @Post('create/category')
  async createPost(
    @Body() categoryDto: CategorytDto,
  ): Promise<DocumentCategory> {
    return await this.documentCategoryService.createCategory(categoryDto);
  }

  @Patch('update/:id')
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCreateDto: UpdateCategorytDto,
  ) {
    try {
      const updatedCategory = await this.documentCategoryService.updateCategory(
        id,
        updateCreateDto,
      );
      if (!updatedCategory) {
        throw new NotFoundException(`Category with id ${id} not found`);
      }
      this.logger.log(`Category with id ${id} updated successfully`);
      return updateCreateDto;
    } catch (error) {
      this.logger.error(
        `Error updating category with id ${id}: ${error.message}`,
      );
      throw error;
    }
  }

  @Delete('delete/:id')
  async deleteCategoryById(@Param('id') categoryId: number): Promise<void> {
    await this.documentCategoryService.deleteCategoryById(categoryId);
  }
}
