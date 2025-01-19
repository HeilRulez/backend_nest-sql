import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user.interface';

@Injectable()
export class LoginService {
  login(body: User) {
    return `Привет ${body.email}`;
  }
}
