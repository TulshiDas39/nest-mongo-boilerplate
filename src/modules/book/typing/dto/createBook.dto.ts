import { IsArray, IsNotEmpty } from "class-validator";

export class CreateBook{
    @IsNotEmpty({message:"Book name missing"})
    name: string;

    @IsArray()
    writers: string[];

    @IsNotEmpty()
    editions:string[];

    @IsNotEmpty()
    level: string;
}