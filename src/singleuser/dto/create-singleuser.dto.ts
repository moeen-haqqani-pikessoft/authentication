import { ApiProperty } from '@nestjs/swagger';
import { Photo } from 'src/photo/entities/photo.entity';
// import { Photo } from '../entities/photo.entity';

export class CreateSingleUserDto {
  @ApiProperty()
  name: string;
  // @ApiProperty()
  // photos:Photo[]
}
