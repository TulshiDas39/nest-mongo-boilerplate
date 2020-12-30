import { Model } from "mongoose";
import { TData } from "../../../../lib";
import { TOmitBase } from "./IBaseCRUD";

export interface IBaseRepository<T>{
    find(...query: Parameters<Model<TData<T>>['find']>):Promise<TData<T>[]>;
    findOne(...query: Parameters<Model<TData<T>>['findOne']>):Promise<TData<T>>;
    getAll(): Promise<T[]>;
    getById(id: string): Promise<TData<T>>;
    update(entity: T): Promise<T>;
    create(entity: TOmitBase<T>): Promise<TData<T>>;
    delete(id: any);
}