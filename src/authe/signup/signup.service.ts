import { Injectable } from '@nestjs/common';

@Injectable()
export class RegService {
  create(user) {
    return `Привет ${user.email}`;
  }
}
