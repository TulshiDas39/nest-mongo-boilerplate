import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "src/modules/base";

@Schema()
export class Auth extends Base{
  @Prop()
  email:string;

  @Prop()
  password:string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
