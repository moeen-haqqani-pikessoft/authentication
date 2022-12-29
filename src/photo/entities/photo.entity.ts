import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { SingleUser } from 'src/singleuser/entities/singleuser.entity';
import { Tag } from 'src/tag/entities/tag.entity';
// import { SingleUser } from './singleuser.entity';
// import { Tag } from './tag.entity';
@Entity('photos')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  userId: number;

  @ManyToOne(() => SingleUser, (user) => user.photos)
  user: SingleUser;
  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
