import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly stdRepo: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.stdRepo.find({
      relations: ['Class', 'subject', 'student_subject'],
    });
  }

  async findOne(id: number): Promise<Student> {
    return await this.stdRepo.findOne({
      where: { id },
      relations: ['Class', 'subject', 'student_subject'],
    });
  }

  async create(student: Student): Promise<Student> {
    return await this.stdRepo.save(student);
  }
  async update(id: number, student: Student): Promise<UpdateResult> {
    //console.log('student', student);
    return await this.stdRepo.update(id, student);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.stdRepo.delete(id);
  }
}
