import { InjectModel } from "@nestjs/mongoose";
import { BaseRepository } from "../base/base.repository";
import { Auth } from "./typing/auth.scema";
import {Model} from "mongoose";
import { TData } from "src/lib/types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRepository extends BaseRepository<Auth>{
    constructor(@InjectModel(Auth.name) private authModel:Model<TData<Auth>>){
        super(authModel);
    }   
}