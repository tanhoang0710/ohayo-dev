import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { StoreConfig } from 'src/store/store.config';
import { StoreService } from './store.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('APP_FACEBOOK') appFacebook: any,
    @Inject('STORE_CONFIG') storeConfig: StoreConfig,
    @Inject('STORE_SERVICE') private StoreService: StoreService,
  ) {
    console.log(
      '🚀 ~ file: user.service.ts:11 ~ UserService ~ storeConfig:',
      storeConfig,
    );
    console.log(appFacebook);
  }

  create(user): UserDto {
    this.StoreService.save(user);
    return new UserDto();
  }
}
