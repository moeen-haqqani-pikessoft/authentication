import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
// import { CreateUserDto } from './create-user.dto';
import { CreatePhotoDto } from './create-photo.dto';
export class UpdatePhotoDto extends PartialType(CreatePhotoDto) {
  @ApiProperty()
  url: string;
  @ApiProperty()
  userId: number;
}
