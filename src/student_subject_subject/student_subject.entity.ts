import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Student } from '../student/student.entity';
import { Subject } from '../subject/subject.entity';
@Entity({ name: 'student_subject_subject' })
export class Student_subject {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  studentId: number;
  @Column()
  subjectId: number;
  @Column()
  point: number;
  @ManyToOne(() => Student, (student) => student.student_subject)
  student: Student;
  @ManyToOne(() => Subject, (subject) => subject.student_subject)
  subject: Subject;
}
