import { Post } from 'src/post/post.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne((type) => User, (user) => user.comments)
  author: User;

  @ManyToOne((type) => Post, (post) => post.comments)
  post: Post;

  @ManyToOne((type) => Comment, (comment) => comment.replies)
  replyTo: Comment;

  @OneToMany((type) => Comment, (comment) => comment.replyTo)
  replies: Comment[];
}
