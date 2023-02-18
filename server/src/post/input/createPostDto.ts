import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  article: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsDefined({ message: 'category field is required' })
  @IsString()
  @IsNotEmpty()
  category: string;
}
