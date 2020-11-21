import { Document } from "mongoose";
import { User } from "src/modules/user/typing";

export type TDocument<T> = T & Document;
export type TRequest<TBody=any,> = {
    user:TDocument<User>;
    body:TBody;
}