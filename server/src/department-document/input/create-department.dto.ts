import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { DocumentCategory } from 'src/document-category/category.entity';

export class CreateDepartmentPdfDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  filename: string;

  @IsNotEmpty()
  @IsNumber()
  categoryId: DocumentCategory;
}
