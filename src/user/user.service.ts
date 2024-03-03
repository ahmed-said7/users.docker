import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Models } from "src/enums/models";
import { UserDoc } from "./user.entity";
import { apiFeatures, queryInterface } from "./api.features";



@Injectable()
export class UserServices {
    constructor(@InjectModel(Models.USER) private User:Model<UserDoc>){};
    async aggregate(){
        const result=await this.User.
        aggregate
        ([{ $group : { _id : "$active" ,countDocs : {$sum:1}, users:{$push:"$name"} } }]);
        return result;
    };
    async filterUsers(queryObj:queryInterface){
        const{paginationObj,query}
        =await new apiFeatures<UserDoc>(this.User.find(),queryObj)
        .filter().sort().search().select().pagination();
        const data=await query;
        return {data,paginationObj};
    };
    async addUser(body:{name:string,age:number,last_login?:Date,active?:boolean}){
        const user
        =await this.User.create(body);
        return { user };
    };
};