import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET',
    });
  }
  //asal validation constructor mai ho rahi ha,yai tou just return krta ha
  async validate(payload: any) {
    return {
      id: payload.sub,
      name: payload.name,
    }; //jo yhan sai return kar rahai wo "req.user" mai available ho jai ga,.protected route walai
  }
}
