import { IsNotEmpty } from "class-validator";

export class RegisterUser{
    @IsNotEmpty()
    firstName: string;
    
    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    phone: string;
    
    @IsNotEmpty()
    password:string;
}