import mongoose from "mongoose";
export const userSchema = new mongoose.Schema({
    last_login:{ type:Date,default:Date.now() },
    age:{type:Number,required:true },
    name:{type:String,required:true},
    active:{type:Boolean,default:true},
}); 
userSchema.index({ name:"text" })
export interface UserDoc extends mongoose.Document {
    last_login:Date;
    age:number;
    name:string;
    active:boolean;
};

