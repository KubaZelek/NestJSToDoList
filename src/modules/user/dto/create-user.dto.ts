import { IsString, isString } from "class-validator";

export class CreateUserDto {
    @IsString({message: "Wymagany string"})
    nickname: string;

    
}
