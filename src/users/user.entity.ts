import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

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
