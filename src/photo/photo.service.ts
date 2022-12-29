import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
// import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
@Injectable()
export class PhotoService {
  //inject user repository
  constructor(
    @InjectRepository(Photo) private readonly userRepository: Repository<Photo>,
  ) {}
  create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    try {
      const photo: Photo = new Photo();
      photo.userId = createPhotoDto.userId;
      photo.url = createPhotoDto.url;
      return this.userRepository.save(photo);
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
  update(id: number, updateUserDto: UpdatePhotoDto) {
    try {
      const photo: Photo = new Photo();
      photo.userId = updateUserDto.userId;
      photo.url = updateUserDto.url;
      return this.userRepository.save(photo);
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
