import { IsNotEmpty } from "class-validator";

export class SingupDto{
    @IsNotEmpty()
    firstName: string;
    
    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    phone: string;
    
    @IsNotEmpty()
    password:string;
}