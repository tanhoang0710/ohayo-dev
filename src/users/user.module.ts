import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserMockService } from './user-mock.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useClass: UserMockService,
    },
  ],
})
export class UserModule {}
