import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';
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
@Controller('subject')
export class SubjectController {
  constructor(private readonly sjService: SubjectService) {}
  @Get()
  findAll(): Promise<Subject[]> {
    return this.sjService.findAll();
  }
  @Get(':id')
  get(@Param() params) {
    return this.sjService.findOne(params.id);
  }
  @Post()
  create(@Body() subject: Subject) {
    return this.sjService.create(subject);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() subject: Subject) {
    return this.sjService.update(id, subject);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.sjService.delete(params.id);
  }
}
