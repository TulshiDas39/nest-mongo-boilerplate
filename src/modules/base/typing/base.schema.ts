import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectID } from "typeorm";

export type BaseDocument = Base & Document;

export class Base {
  @Prop({type:ObjectID,auto:true})
  _id:string;
}

// export const BaseSchema = SchemaFactory.createForClass(Base);
