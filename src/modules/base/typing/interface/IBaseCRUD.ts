import { Document } from "mongoose";
import { TData } from "../../../../lib";
import { Base } from "../base.schema";


export type TOmitBase<T> = Omit<T,keyof Base>;

export interface IBaseCRUD<T>{
    getAll(): Promise<T[]>;
    get(id: string): Promise<TData<T>>;
    update(entity: T): Promise<T>;
    create(entity: TOmitBase<T>): Promise<T & Document>;
    delete(id: any);
}
