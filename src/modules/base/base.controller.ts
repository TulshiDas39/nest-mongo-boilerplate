import { IBaseService } from './typing/interface/IBase.service'
import { Base, IBaseController } from './typing';

export class BaseController<T extends Base> implements IBaseController<T>{

	constructor(private readonly baseService: IBaseService<T>) {}

}