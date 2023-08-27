import { IsString } from 'class-validator';

export class UpdateCategorytDto {
  @IsString()
  category: string;
}
