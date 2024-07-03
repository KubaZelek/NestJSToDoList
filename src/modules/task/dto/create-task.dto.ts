import { IsBoolean, isBoolean, isDate, IsDate, IsNumber, isNumber, IsString, isString } from "class-validator";
import { Type } from 'class-transformer';

export class CreateTaskDto {
    @IsString({message: "Wymagany string"})
     title: string;

     @IsString({message: "Wymagany string"})
     description: string;

  


    @IsBoolean()
    isDone: boolean;

    @IsNumber()
    userId:number;
    catId:number;
    @IsDate()
    @Type(() => Date)
    datetime: Date;

    
}
