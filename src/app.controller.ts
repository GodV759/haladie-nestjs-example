import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { Student } from './student/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
@Controller()
export class UserController {
  constructor(
    @InjectRepository(Student)
    private userRepository: Repository<Student>,
  ) {}
}
