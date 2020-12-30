import { Injectable } from '@nestjs/common';
import { TData } from 'src/lib';
import { BaseService } from '../base/base.service';
import { UserService } from '../user/user.service';
import { AuthRepository } from './auth.repository';
import { Auth } from './typing/auth.scema';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/typing';
import { LoginDto, TJWTValidation } from './typing';
import { UserRepository } from '../user/user.repository';


@Injectable()
export class AuthService extends BaseService<Auth>{
    constructor(private authRepository: AuthRepository,
        private userService: UserService,
        private jwtService: JwtService
        ){
        super(authRepository);
    }

    getByCredential(email:string,password:string){
        return this.authRepository.findOne({email,password});
    }

    async getUser(email: string, pass: string) {
        const user = await this.userService.get(email);
        const userAuth = await this.authRepository.getById(user.id);
        if (user && userAuth.password === pass) {
            return user;
        }
        return null;
    }

    async login(loginDto: LoginDto) {
        const user :TData<User> = await this.userService.findByEmail(loginDto.email);
        const payload:TJWTValidation = { key: Date.now()+"", email: user.email };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }

}
