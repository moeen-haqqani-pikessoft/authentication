import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChannelDto } from './dto/create-channnel.dto';
import { Channel } from './entities/channel.entity';
@Injectable()
export class ChannelService {
  //inject user repository
  constructor(
    @InjectRepository(Channel)
    private readonly userRepository: Repository<Channel>,
  ) {}
  create(createChannelDto: CreateChannelDto): Promise<Channel> {
    try {
      const channel: Channel = new Channel();
      channel.userId = createChannelDto.userId;
      channel.name = createChannelDto.name;
      return this.userRepository.save(channel);
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
