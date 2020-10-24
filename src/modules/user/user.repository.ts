import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "../base/base.repository";
import { User, UserDocument } from "./typing";

@Injectable()
export class UserRepository extends BaseRepository<User>{
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){
        super(userModel);
    }
}