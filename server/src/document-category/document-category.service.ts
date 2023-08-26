import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentCategory } from './category.entity';
import { Repository } from 'typeorm';
import APIFeatures from 'src/apiFeatures/apiFeatures';
import { CategorytDto } from './input/category.dto';
import { UpdateCategorytDto } from './input/update-category.dto';

@Injectable()
export class DocumentCategoryService {
  private readonly logger = new Logger(DocumentCategoryService.name);
  constructor(
    @InjectRepository(DocumentCategory)
    private documentRepository: Repository<DocumentCategory>,
  ) {}
  async getAllCategories(queryParams): Promise<DocumentCategory[] | any> {
    const queryBuilder = this.documentRepository.createQueryBuilder('category');
    // Apply filters
    const apiFeatures = new APIFeatures(queryBuilder, queryParams)

      .filter()
      .limitFields()
      .paginate();

    const finalQuery = apiFeatures.sort().getQuery();

    finalQuery.leftJoinAndSelect('category.documents', 'document');

    // Execute query
    const categories = await finalQuery.getMany();

    if (!categories) {
      throw new NotFoundException(`No Categories to show`);
    }
    return categories;
  }

  async getCategoryById(categoryId: number) {
    const category = await this.documentRepository.findOne({
      where: {
        id: categoryId,
      },
      relations: ['documents'],
    });

    if (!category) {
      throw new NotFoundException(`No post found`);
    }
    return category;
  }

  async createCategory(categoryDto: CategorytDto): Promise<DocumentCategory> {
    try {
      const { category } = categoryDto;

      const categoryName = new DocumentCategory();
      categoryName.category = category;
      categoryName.createdAt = new Date();
      const createdCategory = await this.documentRepository.save(categoryName);

      this.logger.log(
        `New category with id ${createdCategory.id} has been created.`,
      );

      return createdCategory;
    } catch (error) {
      this.logger.error(
        `Error occurred while creating a new category. Error: ${error}`,
      );
      throw error;
    }
  }
  async updateCategory(
    categoryId: number,
    updateCategoryDto: UpdateCategorytDto,
  ): Promise<DocumentCategory | string> {
    const category = await this.documentRepository.findOne({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    // Update the category fields based on the data in updatePostDto
    category.category = updateCategoryDto.category || category.category;

    category.updatedAt = new Date();

    return await this.documentRepository.save(category);
  }
  async deleteCategoryById(categoryId: number): Promise<void> {
    try {
      const result = await this.documentRepository.delete(categoryId);

      if (result.affected === 0) {
        throw new NotFoundException(`Category with ID ${categoryId} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
