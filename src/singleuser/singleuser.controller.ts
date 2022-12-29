import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PhotoService } from 'src/photo/photo.service';
import { CreateSingleUserDto } from './dto/create-singleuser.dto';
import { SingleUserService } from './singleuser.service';
@ApiTags('Single User')
@Controller('singleuser')
export class SingleUserController {
  constructor(
    private readonly photoService: PhotoService,
    private readonly singleUserService: SingleUserService,
  ) {}

  @Post()
  create(@Body() CreateSingleUserDto: CreateSingleUserDto) {
    return this.singleUserService.create(CreateSingleUserDto);
  }
  @Get()
  findAll() {
    return this.singleUserService.findAll();
  }
}
