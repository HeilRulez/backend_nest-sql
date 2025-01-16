import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { RegController } from './signup/signup.controller';
import { LoginService } from './login/login.service';
import { RegService } from './signup/signup.service';

@Module({
  imports: [],
  controllers: [LoginController, RegController],
  providers: [LoginService, RegService],
})
export class AuthModule {}
