import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserMockService {
  create(user: UserDto): UserDto {
    return new UserDto();
  }
}
