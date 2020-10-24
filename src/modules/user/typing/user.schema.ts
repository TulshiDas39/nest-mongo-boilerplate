import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Base } from "src/modules/base/typing";

export type UserDocument = User & Document;

@Schema()
export class User{
  @Prop()
  firstName: string;

  @Prop()
  lastName:string;

  @Prop()
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
