import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UsersTable')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  password: string;
}
