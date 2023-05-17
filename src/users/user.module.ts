import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { StoreModule } from 'src/store/store.module';

const configFB = {
  appId: 'fb001',
  appSecret: '123',
};

@Module({
  imports: [
    StoreModule.register({
      dirName: 'store',
      fileName: 'user.json',
    }),
  ],
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useClass: UserService,
    },
    {
      provide: 'APP_FACEBOOK',
      useValue: configFB,
    },
  ],
})
export class UserModule {}
