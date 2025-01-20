import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { ValidationPipe } from '../common/pipes/validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return `${id}`;
  }
}
