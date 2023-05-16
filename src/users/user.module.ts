import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { StoreConfig } from 'src/store/store.config';
import { StoreService } from './store.service';

const configFB = {
  appId: 'fb001',
  appSecret: '123',
};

function createStore(config: StoreConfig): StoreService {
  console.log('🚀 ~ file: user.module.ts:13 ~ createStore ~ config:', config);
  return new StoreService();
}

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
    {
      provide: 'STORE_SERVICE',
      useFactory: createStore,
      inject: [
        {
          token: 'STORE_CONFIG',
          optional: true,
        },
      ],
    },
  ],
})
export class UserModule {}
