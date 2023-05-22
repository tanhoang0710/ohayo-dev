import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { StoreModule } from 'src/store/store.module';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [
    StoreModule.forFeature({
      filename: 'user.json',
    }),
  ],
  controllers: [UserController],
  providers: [UserService, LoggerService],
})
export class UserModule {}
