import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { StoreService } from 'src/store/store.service';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('STORE_SERVICEuser.json')
    private readonly storeService: StoreService,
    private readonly logService: LoggerService,
  ) {}

  create(user): UserDto {
    this.storeService.save(user);
    return new UserDto();
  }

  getLogger() {
    return this.logService;
  }
}
