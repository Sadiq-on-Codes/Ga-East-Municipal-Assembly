import { CommentDto } from 'src/comment/input/comment.dto';

export class PostDto {
  id: number;
  title: string;
  article: string;
  image: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;

  comments: CommentDto[];
}
