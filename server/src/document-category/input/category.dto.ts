import { IsString } from 'class-validator';

export class CategorytDto {
  @IsString()
  category: string;
}
