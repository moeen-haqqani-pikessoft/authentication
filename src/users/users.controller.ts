import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from "../user/user.service";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
import { ApiTags } from '@nestjs/swagger';
@ApiTags("Users")
@Controller('allUsers')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }
}
