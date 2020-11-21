import { TDocument } from "src/lib";
import { IBaseCRUD } from "./IBaseCRUD";
import { IBaseRepository } from "./IBaseRepository";

export interface IBaseService<T> extends IBaseCRUD<T>,IBaseRepository<T> {
   
}