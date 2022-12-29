import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Channel } from 'src/channel/entities/channel.entity';
import { Photo } from 'src/photo/entities/photo.entity';
// import { Channel } from './channel.entity';
// import { Photo } from './photo.entity';
@Entity('single_users')
export class SingleUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Photo, (photo) => photo.user, {
    //eager:true//iss ko true krnai sai pics bhi load hon gien har user ki,otherwise jb find() sai sirf users get hotai
    lazy: true,
  })
  photos: [Photo];
  // photos: Promise<Photo[]>;//for lazy,to get..
  @OneToOne(() => Channel, (channel) => channel.user)
  channel: Channel;
}
