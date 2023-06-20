import { BadRequestException, Injectable } from '@nestjs/common';
import { Student_subject } from './Student_subject.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class Student_subjectService {
  constructor(
    @InjectRepository(Student_subject)
    private readonly stjRepo: Repository<Student_subject>,
  ) {}
  async findAll(): Promise<Student_subject[]> {
    return await this.stjRepo.find();
  }
  async findOne(id: number): Promise<Student_subject> {
    return await this.stjRepo.findOne({
      where: { id },
      relations: ['student', 'subject'],
    });
  }
  async create(student_subject: Student_subject): Promise<Student_subject> {
    return await this.stjRepo.save(student_subject);
  }
  async update(
    id: number,
    student_subject: Student_subject,
  ): Promise<UpdateResult> {
    return await this.stjRepo.update(id, student_subject);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.stjRepo.delete(id);
  }
}
