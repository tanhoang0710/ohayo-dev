import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { StoreConfig } from 'src/store/store.config';

const configFB = {
  appId: 'fb001',
  appSecret: '123',
};

@Module({
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
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'store',
        path: 'user',
      } as StoreConfig,
    },
  ],
})
export class UserModule {}
