import { InjectModel } from "@nestjs/mongoose";
import { BaseRepository } from "../base/base.repository";
import { Auth } from "./typing/auth.scema";
import {Model} from "mongoose";
import { TDocument } from "src/lib/types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRepository extends BaseRepository<Auth>{
    constructor(@InjectModel(Auth.name) private authModel:Model<TDocument<Auth>>){
        super(authModel);
    }   
}