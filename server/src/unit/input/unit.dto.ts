import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Department } from 'src/department/department.entity';

export class UnitDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  about?: string;

  @IsNotEmpty()
  @IsNumber()
  departmentId: Department;
}
