import { plainToInstance } from 'class-transformer';
import { BaseEntity } from './base.entity';
import { Repository } from 'typeorm';
import { UserDto } from 'src/users/user.dto';

export class MysqlBaseService<Entity extends BaseEntity, Dto> {
  constructor(protected repo: Repository<Entity>) {}

  async save(user: Dto): Promise<any> {
    const savedUser = await this.repo.save(user as any);
    return plainToInstance(UserDto, savedUser, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, user: any): Promise<{ result: string }> {
    const updatedResult = await this.repo.update(id, user);
    return { result: updatedResult.affected.toString() };
  }

  async findOne(id: string): Promise<any> {
    const user = this.repo.findOne({
      where: {
        id: id as any,
      },
    });
    return plainToInstance(UserDto, user, {
      excludeExtraneousValues: true,
    });
  }

  async deleteById(id: string): Promise<{ result: string }> {
    const deleteResult = this.repo.softDelete(id);
    return { result: (await deleteResult).affected.toString() };
  }
}
