import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { EnumUserType } from "src/lib/enum/enum";


@Schema()
export class User{
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  type:EnumUserType;
}

export const UserSchema = SchemaFactory.createForClass(User);
