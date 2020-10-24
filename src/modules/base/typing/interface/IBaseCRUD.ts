import { CreateQuery, Document } from "mongoose";

export interface IBaseCRUD<T>{
    getAll(): Promise<T[]>;
    get(id: number): Promise<T>;
    update(entity: T): Promise<T>;
    create(entity: CreateQuery<T>): Promise<T & Document>;
    delete(id: number);
}

export type TDocument<T> = T & Document;