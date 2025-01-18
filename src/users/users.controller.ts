import { Controller, Get, Post, Delete, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  async createUser() {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<user> {
    return `${id}`;
  }
}
