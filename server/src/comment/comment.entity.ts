import { BlogPost } from 'src/post/post.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @ManyToOne((type) => User, (user) => user.comments)
  user: User;

  @ManyToOne((type) => BlogPost, (post) => post.comments)
  @JoinColumn({ name: 'postId' })
  post: BlogPost;

  // @ManyToOne((type) => Comment, (comment) => comment.replies)
  // replyTo: Comment;

  // @OneToMany((type) => Comment, (comment) => comment.replyTo)
  // replies: Comment[];
}
