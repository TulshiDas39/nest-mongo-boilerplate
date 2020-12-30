import { TData } from "../../../../lib";
import { IBaseCRUD, TOmitBase } from "./IBaseCRUD";
import { IBaseRepository } from "./IBaseRepository";

export interface IBaseService<T>{
    create(data: TOmitBase<T>): Promise<TData<T>>
}