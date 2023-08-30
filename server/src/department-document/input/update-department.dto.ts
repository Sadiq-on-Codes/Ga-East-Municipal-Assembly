import { DocumentCategory } from 'src/document-category/category.entity';

export class UpdateDepartmentPdfDto {
  title?: string;

  filename?: string;

  category?: DocumentCategory; // Assuming this is the ID of the related DocumentCategory
}
