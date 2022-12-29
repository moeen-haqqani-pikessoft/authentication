import { ApiProperty } from '@nestjs/swagger';
// import { SingleUser } from "../entities/singleuser.entity";

export class CreateTagDto {
  @ApiProperty()
  name: string;
  // @ApiProperty()
  // userId:number
}
