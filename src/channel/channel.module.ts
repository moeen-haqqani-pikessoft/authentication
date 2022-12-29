import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Channel } from './entities/channel.entity';
import { ChannnelController } from './channel.controller';
import { ChannelService } from './channel.service';
@Module({
  imports: [TypeOrmModule.forFeature([Channel])],
  controllers: [ChannnelController],
  providers: [ChannelService],
})
export class ChannelModule {}
