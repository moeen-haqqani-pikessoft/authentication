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
import { CreateChannelDto } from './dto/create-channnel.dto';
import { ChannelService } from './channel.service';
@ApiTags('Channel')
@Controller('channel')
export class ChannnelController {
  constructor(private readonly channelService: ChannelService) {}

  @Post()
  create(@Body() CreateChannelDto: CreateChannelDto) {
    return this.channelService.create(CreateChannelDto);
  }
}
