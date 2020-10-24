import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Get("getAll")
    getAll(){
        const all = this.userService.getAll();
        return all;
    }
}
