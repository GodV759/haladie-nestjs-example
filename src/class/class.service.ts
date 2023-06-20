import { BadRequestException, Injectable } from '@nestjs/common';
import { Class } from './class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
//import { Student } from '../student/student.entity';
@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly clssRepo: Repository<Class>,
  ) {}
  async findAll(): Promise<Class[]> {
    return await this.clssRepo.find({ relations: ['student'] });
  }
  async findOne(id: number): Promise<Class> {
    return await this.clssRepo.findOne({
      where: { id },
      relations: ['student'],
    });
  }
  async create(classe: Class): Promise<Class> {
    return await this.clssRepo.save(classe);
  }
  async update(id: number, classe: Class): Promise<UpdateResult> {
    return await this.clssRepo.update(id, classe);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.clssRepo.delete(id);
  }
}
