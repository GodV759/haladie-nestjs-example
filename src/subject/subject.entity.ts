import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Student } from '../student/student.entity';
import { Student_subject } from 'src/student_subject_subject/student_subject.entity';
@Entity({ name: 'subject' })
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  detail: string;
  @ManyToMany(() => Student, (student) => student.subject)
  // @JoinTable()
  student: Student[];
  @OneToMany(
    () => Student_subject,
    (student_subject) => student_subject.subject,
  )
  student_subject: Student_subject[];
}
