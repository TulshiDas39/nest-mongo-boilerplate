import { IsString } from "class-validator";

export class SearchDto{
    @IsString({message:"Keyword is required"})
    keyword: string;

    limit: number;
}