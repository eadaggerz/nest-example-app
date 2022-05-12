import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id/:name')
  findOne(@Param('id') id: string, @Param('name') name: string): string {
    return `This action returns a #${id} cat with name ${name}.`;
  }

  @Get('/async')
  async findAsync(): Promise<any[]> {
    return [];
  }
}
