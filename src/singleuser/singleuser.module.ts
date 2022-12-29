import { Module } from '@nestjs/common';
import { SingleUserService } from './singleuser.service';
import { SingleUserController } from './singleuser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SingleUser } from './entities/singleuser.entity';
import { PhotoService } from 'src/photo/photo.service';
import { Photo } from 'src/photo/entities/photo.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SingleUser, Photo])],
  controllers: [SingleUserController],
  providers: [SingleUserService, PhotoService],
})
export class SingleUserModule {}
