import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class FileData {

  @Prop()
  length: number;

  @Prop()
  chunkSize: number;

  @Prop()
  uploadDate: string;

  @Prop()
  filename: string;

  @Prop()
  md5:string;

  @Prop()
  contentType:string;
}

export const ClipSchema = SchemaFactory.createForClass(FileData);
