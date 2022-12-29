import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { SingleUser } from 'src/singleuser/entities/singleuser.entity';
// import { SingleUser } from './singleuser.entity';
//   import { User } from './User';
//   import { Video } from './Video';
@Entity('channel')
export class Channel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  userId: number;
  @OneToOne(() => SingleUser, (user) => user.channel)
  @JoinColumn()
  user: SingleUser;
}

///
