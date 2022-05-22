import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities): string {
    return `This action return all cats (limit: ${query}) items`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() UpdateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
