import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT, // moi lan inject thi tao 1 instance moi
  // scope: Scope.DEFAULT, // chi tao 1 instance cho tat ca cac lan inject (singleton )
  // scope: Scope.REQUEST, // moi mot Request thi tao 1 instance moi
})
export class LoggerService {
  count = 0;

  log(): number {
    this.count++;
    return this.count;
  }
}
