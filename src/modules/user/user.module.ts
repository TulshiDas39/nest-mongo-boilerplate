import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User,UserSchema } from './typing/user.schema';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    exports:[MongooseModule,UserService],
    controllers: [UserController],
    providers: [UserService,UserRepository]
})
export class UserModule {}
