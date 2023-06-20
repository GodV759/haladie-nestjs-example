import {
  Entity,
  OneToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Student } from '../student/student.entity';
@Entity({ name: 'class' })
export class Class {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  className: string;
  @OneToMany(() => Student, (student) => student.Class)
  @JoinColumn()
  student: Student;
}
