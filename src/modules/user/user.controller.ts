import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { TDocument } from '../base';
import { BaseController } from '../base/base.controller';
import { RegisterUser, User } from './typing';
import { UserService } from './user.service';

@Controller('user')
export class UserController extends BaseController<User>{
    constructor(private userService:UserService){
        super(userService);
    }

    @Post()
	@ApiResponse({ status: 201, description: 'The record has been successfully created.'})
	@ApiResponse({ status: 403, description: 'Forbidden.'})
	@ApiResponse({ status: 400, description: 'Bad Request.'})
	async create(@Body() data: RegisterUser): Promise<TDocument<User>> {
		return this.userService.create(data);
	}

}
