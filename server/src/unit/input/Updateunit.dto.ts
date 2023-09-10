import { Department } from 'src/department/department.entity';

export class UpdateUnitDto {
  title?: string;

  about?: string;

  department?: Department; // Assuming this is the ID of the related DocumentCategory
}
