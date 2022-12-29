import { Controller, Get, Post, UseGuards, Request, Body } from "@nestjs/common";
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ApiTags } from "@nestjs/swagger";
import { CreateUsersDto } from "./users/dto/create-users.dto";
import { UsersService } from "./users/users.service";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService,private readonly usersService:UsersService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  Login(@Request() req): any {
    return this.authService.login(req.user); //user agr successfully login ho jaata ha tou wo user return kr rahai
    //todo return jwt access token
  }
  @Post("createuser")
  async create(@Body() createUsersDto: CreateUsersDto) {
    const data=await this.usersService.create(createUsersDto);
const payload={
  name:data.name,
  username:data.username
}
    const token=await this.authService.generateToken(payload)
    console.log(token,"tokeeene")
    return token;

  }
  //this route should only be accessible if the user is login
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
    // return this.appService.getHello();
    //todo :require a bearer token ,validate token
  }
}
