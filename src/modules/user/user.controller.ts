import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BaseController } from '../base/base.controller';
import { User } from './typing';
import { UserService } from './user.service';

@Controller('user')
export class UserController extends BaseController<User>{
    constructor(private userService:UserService){
        super(userService);
    }

    @UseGuards(JwtAuthGuard)
    @Get("contributor/all")
    getAllContributor(){
        return this.userService.getAllContributors();
    }

}
