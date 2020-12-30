import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from "class-validator";

export class CreateContributorDto{
    @IsNotEmpty()
    name: string;

    @MinLength(11,{message:'phone number should be 11 digit'})
    phone: string;

    @IsEmail({},{message:'Invalid email'})
    email:string;
    
    @ApiProperty()
    @MinLength(5,{message:'Password should be min 5 character'})
    password:string;
}