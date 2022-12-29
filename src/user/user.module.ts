import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SingleUserService } from 'src/singleuser/singleuser.service';
import { SingleUser } from 'src/singleuser/entities/singleuser.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, SingleUser])],
  controllers: [UserController],
  providers: [UserService, SingleUserService],
  exports: [UserService],
})
export class UserModule {}
