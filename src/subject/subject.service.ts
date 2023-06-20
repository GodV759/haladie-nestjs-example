import { Inject, Injectable } from '@nestjs/common';
import { Subject } from './subject.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly sjRepo: Repository<Subject>,
  ) {}
  async findAll(): Promise<Subject[]> {
    return await this.sjRepo.find();
  }
  async findOne(id: number): Promise<Subject> {
    return await this.sjRepo.findOne({ where: { id } });
  }
  async create(subject: Subject): Promise<Subject> {
    return await this.sjRepo.save(subject);
  }
  async update(id: number, subject: Subject): Promise<UpdateResult> {
    return await this.sjRepo.update(id, subject);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.sjRepo.delete(id);
  }
}
