import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Models } from "src/enums/models";
import { userSchema } from "./user.entity";
import { UserServices } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    controllers:[UserController],
    providers:[UserServices],
    imports:[
    MongooseModule
    .forFeature([{name:Models.USER,schema:userSchema}])
    ]
})
export class UserModule {};