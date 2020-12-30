import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ServerConfig } from 'src/lib/config/ServerConfig';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { Auth, AuthSchema } from './typing/auth.scema';

const jwtConfig = JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: ServerConfig.SessionTime },
  })
@Module({
    imports:[UserModule,MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    PassportModule,
    jwtConfig],
    controllers:[AuthController],
    providers: [AuthService,AuthRepository,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
