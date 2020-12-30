import { Document, Model } from "mongoose";
import { TData } from "../../lib";
import { Base } from ".";
import { IBaseRepository, TOmitBase } from "./typing";

export class BaseRepository<T extends Base> implements IBaseRepository<T>{
    constructor(private readonly baseModel:Model<TData<T>>){}

    find(...query: Parameters<Model<TData<T>>['find']>) {
        return this.baseModel.find(...query).exec();
    }
    findOne(...query: Partial<Parameters<Model<TData<T>>['findOne']>>) {
        return this.baseModel.findOne(...query).exec();
    }

    getAll(): Promise<T[]> {
        return this.baseModel.find().exec();
    }
    getById(id: string) {
        return this.baseModel.findById(id).exec();
    }
    update(data: T & Document): Promise<T> {
        data.updatedAt = new Date().toISOString();
        return this.baseModel.updateOne({_id:data.id},data as any).exec();
    }
    create(data: TOmitBase<T> ): Promise<TData<T>> {
        const dateNow = new Date().toISOString(); 
        const dataToInsert = {
            ...data,
            createdAt: dateNow,
            updatedAt: dateNow,
        } as T;

        return this.baseModel.create(dataToInsert as any);
    }
    delete(id: any){
        return this.baseModel.remove({_id:id}).exec();
    }
}