import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  image?: string;
  @IsDefined({ message: 'about field is required' })
  @IsString()
  @IsNotEmpty()
  about: string;
}
