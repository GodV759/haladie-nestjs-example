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
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { UpdateResult } from 'typeorm';

@Controller('students')
export class StudentController {
  constructor(private readonly stdService: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.stdService.findAll();
  }

  @Get(':id')
  get(@Param() params) {
    return this.stdService.findOne(params.id);
  }

  @Post()
  create(@Body() student: Student) {
    return this.stdService.create(student);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() student: Student) {
    return this.stdService.update(id, student);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.stdService.delete(params.id);
  }
}
