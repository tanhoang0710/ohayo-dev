import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { StoreService } from 'src/store/store.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('APP_FACEBOOK') appFacebook: any,
    private readonly storeService: StoreService,
  ) {
    console.log(appFacebook);
  }

  create(user): UserDto {
    this.storeService.save(user);
    return new UserDto();
  }
}
