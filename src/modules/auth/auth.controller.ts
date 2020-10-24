import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingupDto } from './typing';

@Controller('auth')
export class AuthController {
  constructor(private userService: AuthService) {}

  @Post('signup')
  signup(@Body() singupDto: SingupDto) {
    console.log(singupDto);
    this.userService.create(singupDto);
    return 'This action adds a new cat';
  }
}
