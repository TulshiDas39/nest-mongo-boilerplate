import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";
import { EnumUserType } from "src/lib/enum/enum";

export class SingupDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    type:EnumUserType;
    
    @ApiProperty()
    @IsNotEmpty()
    password:string;
}