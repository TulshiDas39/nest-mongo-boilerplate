import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { TDocument } from 'src/lib';
import { BaseController } from '../base/base.controller';
import { RegisterUser, User } from './typing';
import { UserService } from './user.service';

@Controller('user')
export class UserController extends BaseController<User>{
    constructor(private userService:UserService){
        super(userService);
    }

}
