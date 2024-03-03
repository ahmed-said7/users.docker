import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UserServices } from "./user.service";
import { queryInterface } from "./api.features";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name:string;
    @IsNotEmpty()
    @IsNumber()
    age:number;
    @IsOptional()
    @IsBoolean()
    active:boolean;
    @IsOptional()
    @IsDate()
    last_login:Date;
};


@Controller('user')
export class UserController {
    constructor(private UserService:UserServices){};
    @Get('filter')
    getAll(@Query() query:queryInterface ){
        return this.UserService.filterUsers(query);
    };
    @Get('aggregate')
    getAggregate(){
        return this.UserService.aggregate();
    };
    @Post()
    addUser(@Body() body: CreateUserDto ){
        return this.UserService.addUser(body);
    };
};