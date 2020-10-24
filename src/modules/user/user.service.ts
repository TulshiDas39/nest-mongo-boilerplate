import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from '../base/base.service';
import { User, UserDocument } from './typing/user.schema';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends BaseService<User>{
    constructor(private userRepository: UserRepository){
        super(userRepository);
    }
}
