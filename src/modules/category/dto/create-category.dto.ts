import { IsString, isString } from "class-validator";

export class CreateCategoryDto {
    @IsString({message: "Wymagany string"})
    name: string;

    
}
