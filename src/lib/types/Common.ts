import { Request } from "express";
import { Document } from "mongoose";
import { User } from "src/modules/user/typing";

export type TData<T> = T & Document;
export interface IRequest<ReqBody = any,Query=undefined, Param=undefined> extends Request<Param,any,ReqBody,Query>{
    user:TData<User>;
}