import { DepartmentPdf } from 'src/department-document/DepartmentPdf .entity';
import { Unit } from 'src/unit/unit.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => Unit, (unit) => unit.department)
  unit: Unit[];

  @Column()
  about: string;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
