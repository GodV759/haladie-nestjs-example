import { Module } from '@nestjs/common';
import { Student_subjectController } from './student_subject.controller';
import { Student_subjectService } from './student_subject.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student_subject } from './student_subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student_subject])],
  controllers: [Student_subjectController],
  providers: [Student_subjectService],
})
export class Student_subjectModule {}
