import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { StoreConfig } from 'src/store/store.config';

@Injectable()
export class UserService {
  constructor(
    @Inject('APP_FACEBOOK') appFacebook: any,
    @Inject('STORE_CONFIG') storeConfig: StoreConfig,
  ) {
    console.log(
      '🚀 ~ file: user.service.ts:11 ~ UserService ~ storeConfig:',
      storeConfig,
    );
    console.log(appFacebook);
  }

  create(user): UserDto {
    return new UserDto();
  }
}
