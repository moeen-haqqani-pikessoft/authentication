// import { Injectable } from '@nestjs/common';
//
// @Injectable()
// export class AuthService {}
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');
import { use } from 'passport';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const isPasswordMatching = await bcrypt.compare(
      password,
      user.password
    );
    console.log(isPasswordMatching,"ispassword matched")
    if (user && isPasswordMatching) {
      const { password, username, ...rest } = user;
      return rest;
    }
    return null;
  }
  async generateToken(payload){
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(user: any) {
    //payload represents the information that we want to store in jwt
    const payload = {
      name: user.name,
      sub: user.id,
    };
    const token=await this.generateToken(payload)
    return token;
  }
}
