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
import { ClassService } from './class.service';
import { Class } from './class.entity';

@Controller('class')
export class ClassController {
  constructor(private readonly clssService: ClassService) {}

  @Get()
  findAll(): Promise<Class[]> {
    return this.clssService.findAll();
  }
  @Get(':id')
  get(@Param() params) {
    return this.clssService.findOne(params.id);
  }
  @Post()
  create(@Body() classe: Class) {
    return this.clssService.create(classe);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() classe: Class) {
    return this.clssService.update(id, classe);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.clssService.delete(params.id);
  }
}
