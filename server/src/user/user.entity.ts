import { Comment } from 'src/comment/comment.entity';
import { Post } from 'src/post/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];

  @OneToMany((type) => Comment, (comment) => comment.author)
  comments: Comment[];
}
