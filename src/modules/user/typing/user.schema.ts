import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { EnumUserType } from "src/lib/enum/enum";
import { Base } from "src/modules/base";


@Schema()
export class User extends Base{
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
