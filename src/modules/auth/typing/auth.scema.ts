import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "src/modules/base";
import { ObjectID } from "typeorm";

export type AuthDocument = Auth & Document;

@Schema()
export class Auth extends Base{
  @Prop()
  token: string;

  @Prop([ObjectID])
  userId:string;

  @Prop()
  password:string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
