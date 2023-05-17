import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { plainToClass } from 'class-transformer';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return [
      {
        name: 'tanhun',
        age: 18,
      },
      {
        name: 'gama',
        age: 18,
      },
    ];
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    user.createdAt = new Date();
    user.id = 1;
    user.updatedAt = new Date();

    const userReal = plainToClass(UserDto, user, {
      excludeExtraneousValues: true,
    });
    console.log(
      '🚀 ~ file: user.controller.ts:39 ~ UserController ~ createUser ~ userReal:',
      userReal,
    );
    this.userService.create(user);

    return UserDto.plainToClass(user);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return 'test';
  }
}
