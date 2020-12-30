import { BadRequestException, Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { IRequest } from 'src/lib';
import { EnumUserType } from 'src/lib/enum/enum';
import { Validation } from '../app/validation.pipe';
import { TOmitBase } from '../base';
import { BaseController } from '../base/base.controller';
import { User } from '../user/typing';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { CreateContributorDto, LoginDto, SingupDto } from './typing';
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

  @Post('createContributor')
  async createContributor(@Body(new Validation()) createContributorDto: CreateContributorDto) {
    const existingUser = await this.userService.findByEmail(createContributorDto.email);
    if(existingUser) throw new BadRequestException("User already exist");
    const userDataModel:TOmitBase<User> = {
      ...createContributorDto,
      type: EnumUserType.CONTRIBUTOR,
    }
    const userData = await this.userService.create(userDataModel);
    await this.authService.create({password:createContributorDto.password,email:userData.email});
    return true;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req:IRequest,@Body() loginDto:LoginDto) {
    const user = req.user;
    const token = await this.authService.login(loginDto);
    return {
      profile:user,
      access_token:token.access_token,
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req:IRequest) {
    return req.user;
  }
}
