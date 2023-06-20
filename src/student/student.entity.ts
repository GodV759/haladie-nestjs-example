import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Class } from '../class/class.entity';
import { Subject } from '../subject/subject.entity';
import { Student_subject } from 'src/student_subject_subject/student_subject.entity';
@Entity({ name: 'student' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @OneToOne(() => Class, (Class) => Class.student)
  @JoinColumn()
  Class: Class;
  @ManyToMany(() => Subject, (subject) => subject.student)
  @JoinTable()
  subject: Subject[];
  @OneToMany(
    () => Student_subject,
    (student_subject) => student_subject.student,
  )
  student_subject: Student_subject[];
}
