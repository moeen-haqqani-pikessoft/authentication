import { ApiProperty } from '@nestjs/swagger';
import { SingleUser } from 'src/singleuser/entities/singleuser.entity';
// import { SingleUser } from '../entities/singleuser.entity';

export class CreatePhotoDto {
  @ApiProperty()
  url: string;
  @ApiProperty()
  userId: number;
}
