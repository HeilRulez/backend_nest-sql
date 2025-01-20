import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async create(newUser) {
    return `${newUser}`;
  }
}
