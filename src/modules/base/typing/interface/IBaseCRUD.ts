import { CreateQuery, Document } from "mongoose";
import { TDocument } from "src/lib";

export interface IBaseCRUD<T>{
    getAll(): Promise<T[]>;
    get(id: string): Promise<TDocument<T>>;
    update(entity: T): Promise<T>;
    create(entity: CreateQuery<T>): Promise<T & Document>;
    delete(id: any);
}
