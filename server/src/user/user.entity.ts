import { IsOptional } from 'class-validator';
import { Comment } from 'src/comment/comment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  @IsOptional()
  website: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
