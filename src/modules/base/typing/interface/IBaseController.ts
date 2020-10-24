import { Base } from "../base.schema";
import { IBaseCRUD } from "./IBaseCRUD";

export interface IBaseController<T extends Base> extends IBaseCRUD<T>{}