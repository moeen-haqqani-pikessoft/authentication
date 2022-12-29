import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto";
import { Users } from "./entities/users.entity";
import {InjectRepository } from "@nestjs/typeorm";
const bcrypt = require('bcrypt');

import {Repository } from "typeorm";@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) {}
  async create(createUsersDto: CreateUsersDto): Promise<Users> {
    try {
      console.log("inside create of Users")
      const user: Users = new Users();
      const hashedPassword = await bcrypt.hash(createUsersDto.password, 10);

      user.name = createUsersDto.name;
      user.username = createUsersDto.username;
      user.password = hashedPassword;
      return this.usersRepository.save(user);

    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
  async findOne(username: string): Promise<Users | undefined> {
    let userNameReceived=username;
    return await this.usersRepository.findOneBy({
      username: userNameReceived,
    });
  }

}
