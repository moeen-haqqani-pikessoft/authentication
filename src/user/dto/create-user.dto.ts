import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  age: number;
}
// export class CreateSingleUserDto {
//     name:string;
//     photos:[]
// }
