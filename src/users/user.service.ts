import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(user: UserDto): Promise<UserDto> {
    const savedUser = await this.userRepository.save(user);
    return plainToInstance(UserDto, savedUser, {
      excludeExtraneousValues: true,
    });
  }
}
