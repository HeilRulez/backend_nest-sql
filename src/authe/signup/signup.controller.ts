import { Body, Controller, Post } from '@nestjs/common';
import { RegService } from './signup.service';
import { CreateUserDto } from '../../users/dto/createUser.dto';

@Controller('signup')
export class RegController {
  constructor(private regService: RegService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.regService.create(user);
  }
}
