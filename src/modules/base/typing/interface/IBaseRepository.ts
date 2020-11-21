import { TDocument } from "src/lib";
import { IBaseCRUD } from "./IBaseCRUD";

export interface IBaseRepository<T> extends IBaseCRUD<T>{
    find(query:any):Promise<TDocument<T>[]>;
    findOne(query:any):Promise<TDocument<T>>;
}