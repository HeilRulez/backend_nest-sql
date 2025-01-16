import { Body, Controller, Post, Param } from '@nestjs/common';
// import { UserDto } from '../dto/User.dto';
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

// @Param(key?: string)	req.params/req.params[key]

//    @Get()
//    @Redirect('https://nestjs.com', 301)

//    @Redirect()принимает два аргумента, urlи
//    statusCode, оба необязательны. Значение по
//    умолчанию statusCode— 302( Found), если опущено.

// __________________________________________

//    Возвращаемые значения переопределят любые аргументы, переданные декоратору @Redirect(). Например:

//    @Get('docs')
//    @Redirect('https://docs.nestjs.com', 302)
//    getDocs(@Query('version') version) {
//      if (version && version === '5') {
//        return { url: 'https://docs.nestjs.com/v5/' };
//      }
//    }
