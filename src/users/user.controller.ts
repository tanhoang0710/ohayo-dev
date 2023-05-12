import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
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

  @Post()
  createUser() {
    return {
      name: 'tanhun',
      age: 18,
    };
  }
}
