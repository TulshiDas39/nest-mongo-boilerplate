import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { TRequest } from 'src/lib';
import { BaseController } from '../base/base.controller';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto, SingupDto } from './typing';
import { Auth } from './typing/auth.scema';

@Controller('auth')
export class AuthController extends BaseController<Auth> {
  constructor(private userService: UserService,
    private authService: AuthService) {
      super(authService);
    }

  @Post('signup')
  async signup(@Body() singupDto: SingupDto) {
    console.log(singupDto);
    const userData = await this.userService.create(singupDto);
    await this.authService.create({password:singupDto.password,email:userData.email});
    const accessTokenObj = await this.authService.login({email:singupDto.email,password:singupDto.password});
    const responseData = {profile:userData,...accessTokenObj}
    return responseData;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req:TRequest,@Body() loginDto:LoginDto) {
    const user = req.user;
    const token = await this.authService.login(loginDto);
    return {
      profile:user,
      access_token:token.access_token,
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req:TRequest) {
    return req.user;
  }
}
