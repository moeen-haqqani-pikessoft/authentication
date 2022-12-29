import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entities/users.entity";
import { UsersController } from "./users.controller";
@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers:[UsersController],
  providers: [UsersService],
  exports: [UsersService], //as we want to use it in another module
})
export class UsersModule {}
