import { Prop, Schema } from "@nestjs/mongoose";
@Schema()
export class Base {
  @Prop()  
  createdAt:string;

  @Prop()  
  updatedAt:string;

}
