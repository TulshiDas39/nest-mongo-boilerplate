import { Body, Controller, Post } from '@nestjs/common';
import { SingupDto } from './typing';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signup(@Body() singupDto: SingupDto) {
    console.log(singupDto);
    return 'This action adds a new cat';
  }
}
