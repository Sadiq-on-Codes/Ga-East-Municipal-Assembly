import { Admin } from 'src/admin/admin.entity';
import { Comment } from 'src/comment/comment.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  article: string;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Admin, (admin) => admin.posts)
  admin: Admin;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
