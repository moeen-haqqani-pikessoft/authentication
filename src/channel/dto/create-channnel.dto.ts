import { ApiProperty } from '@nestjs/swagger';
// import { SingleUser } from "../entities/singleuser.entity";

export class CreateChannelDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  userId: number;
}
