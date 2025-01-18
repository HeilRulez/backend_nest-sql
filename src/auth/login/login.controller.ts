import { Body, Controller, Post, Param } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async login(@Body() user) {
    return this.loginService.login(user);
  }

  @Post('resetpassword')
  async resPass(@Param('email') email: string, @Body() user) {
    return this.loginService.login(user);
  }
}
