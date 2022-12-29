import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
// export class CreateSingleUserDto {
//     name:string;
//     photos:[]
// }
