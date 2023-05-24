import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: UserDto): Promise<UserDto> {
    return await this.userService.save(user);
  }

  @Put(':id')
  async updateUserById(
    @Param('id') id: string,
    @Body() user: UserDto,
  ): Promise<{ result: string }> {
    return await this.userService.update(id, user);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<UserDto> {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<{ result: string }> {
    return this.userService.deleteById(id);
  }
}
