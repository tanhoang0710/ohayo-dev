import { BaseEntity } from 'src/common/mysql/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity extends BaseEntity {
  @Column({ length: 50 })
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ['admin', 'group'],
    default: 'admin',
  })
  role: string;
}
