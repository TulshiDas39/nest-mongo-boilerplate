import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "src/modules/base";

@Schema()
export class Book extends Base{
  @Prop()
  name: string;

  @Prop([String])
  writers: string[];

  @Prop([String])
  editions: string[];

  @Prop()
  level: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
