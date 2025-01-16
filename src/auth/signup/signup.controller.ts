import { Body, Controller, Post } from '@nestjs/common';
import { RegService } from './signup.service';
import { UserDto } from './dto/User.dto';

@Controller('signup')
export class RegController {
  constructor(private regService: RegService) {}

  @Post()
  async createUser(@Body() user: UserDto) {
    return this.regService.create(user);
  }
}
