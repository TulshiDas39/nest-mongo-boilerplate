import { CreateQuery, Document, Model } from "mongoose";
import { TDocument } from "src/lib";
import { Base } from ".";
import { IBaseRepository } from "./typing";

export class BaseRepository<T extends Base> implements IBaseRepository<T>{
    constructor(private readonly baseModel:Model<T & Document>){}

    find(query: any) {
        return this.baseModel.find(query).exec();
    }
    findOne(query: any) {
        return this.baseModel.findOne(query).exec();
    }

    getAll(): Promise<T[]> {
        return this.baseModel.find().exec();
    }
    get(id: string) {
        return this.baseModel.findById(id).exec();
    }
    update(data: T & Document): Promise<T> {
        return this.baseModel.updateOne({_id:data.id},data).exec();
    }
    create(data: CreateQuery<T> ): Promise<T & Document> {
        return this.baseModel.create(data);
    }
    delete(id: any){
        return this.baseModel.remove({_id:id}).exec();
    }
}