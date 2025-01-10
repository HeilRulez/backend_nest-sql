import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('login')
export class LoginController {
  @Post()
  login(@Req() request: Request): string {
    return `${request}`;
  }

  @Post('resetpassword')
  resPass(@Req() request: Request): string {
    return `${request}`;
  }
}


// @Param(key?: string)	req.params/req.params[key]

// @Get()
// @Redirect('https://nestjs.com', 301)

// @Redirect()принимает два аргумента, urlи 
// statusCode, оба необязательны. Значение по 
// умолчанию statusCode— 302( Found), если опущено.