import { Department } from 'src/department/department.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class DepartmentPdf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @ManyToOne(() => Department, (department) => department.pdfs)
  @JoinColumn({ name: 'department_id' })
  department: Department;
}
