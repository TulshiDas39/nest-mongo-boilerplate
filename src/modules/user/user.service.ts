import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EnumUserType } from 'src/lib/enum/enum';
import { BaseService } from '../base/base.service';
import { User } from './typing/user.schema';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends BaseService<User>{
    constructor(private userRepository: UserRepository){
        super(userRepository);
    }

    findByEmail(email:string){
        return this.userRepository.findOne({email});
    }

    getAllContributors() {
        return this.userRepository.find({type:EnumUserType.CONTRIBUTOR});
    }
}
