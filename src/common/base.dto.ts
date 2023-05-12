import { Expose, plainToClass } from 'class-transformer';

export abstract class BaseDto {
  @Expose()
  id: number;

  @Expose()
  updatedAt: Date;

  @Expose()
  createdAt: Date;

  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
