import { Schema } from "@nestjs/mongoose";

export type BaseDocument = Base & Document;

@Schema()
export class Base {
  
}

