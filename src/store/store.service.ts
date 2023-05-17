import { Inject, Injectable } from '@nestjs/common';
import { StoreConfig } from './store.config';
import * as fs from 'fs';

@Injectable()
export class StoreService {
  constructor(
    @Inject('STORE_CONFIG') private readonly storeConfig: StoreConfig,
  ) {
    if (!fs.existsSync(this.storeConfig.dirName)) {
      fs.mkdirSync(this.storeConfig.dirName);
    }
  }

  save(data: any): void {
    console.log(
      '🚀 ~ file: store.service.ts:16 ~ StoreService ~ save ~ data:',
      data,
    );
    fs.appendFileSync(
      `${this.storeConfig.dirName}/${this.storeConfig.fileName}`,
      JSON.stringify(data),
    );
  }
}
