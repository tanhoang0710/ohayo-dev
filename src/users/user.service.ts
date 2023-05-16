import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  create(user): UserDto {
    return new UserDto();
  }
}
