import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { UserService } from '../user/user.service';
import { TJWTValidation } from './typing';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService:UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  validate(payload: TJWTValidation) {
    return this.userService.findByEmail(payload.email);
  }
}