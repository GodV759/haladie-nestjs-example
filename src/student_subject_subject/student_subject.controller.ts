import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { Student_subjectService } from './student_subject.service';
import { Student_subject } from './student_subject.entity';

@Controller('student_subject')
export class Student_subjectController {
  constructor(private readonly stjService: Student_subjectService) {}
  @Get()
  findAll(): Promise<Student_subject[]> {
    return this.stjService.findAll();
  }
  @Get(':id')
  get(@Param() params) {
    return this.stjService.findOne(params.id);
  }
  @Post()
  create(@Body() student_subject: Student_subject) {
    return this.stjService.create(student_subject);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() student_subject: Student_subject) {
    return this.stjService.update(id, student_subject);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.stjService.delete(params.id);
  }
}
