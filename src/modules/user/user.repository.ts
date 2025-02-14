import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TData } from "src/lib";
import { BaseRepository } from "../base/base.repository";
import { User } from "./typing";

@Injectable()
export class UserRepository extends BaseRepository<User>{
    constructor(@InjectModel(User.name) private userModel:Model<TData<User>>){
        super(userModel);
    }
}