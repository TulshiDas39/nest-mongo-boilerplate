import { IsNotEmpty } from "class-validator";

export class SingupDto{
    firstName: string;
    lastName: number;
    phone: string;
    
    @IsNotEmpty()
    password:string;
}