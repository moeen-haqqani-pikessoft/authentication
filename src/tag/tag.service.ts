import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './entities/tag.entity';
@Injectable()
export class TagService {
  //inject user repository
  constructor(
    @InjectRepository(Tag) private readonly userRepository: Repository<Tag>,
  ) {}
  create(createTagDto: CreateTagDto): Promise<Tag> {
    try {
      const tag: Tag = new Tag();
      // tag.userId=createPhotoDto.userId
      tag.name = createTagDto.name;
      return this.userRepository.save(tag);
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
