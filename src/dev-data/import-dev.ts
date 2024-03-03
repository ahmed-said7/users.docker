import * as fs from 'node:fs';
import mongoose from 'mongoose';
import { userSchema } from 'src/user/user.entity';

const data=JSON.parse( fs.readFileSync('./user.json','utf-8') );
const conn=mongoose.createConnection(process.env.url);
const User=conn.model('User',userSchema);

const importData=async ()=>{
    try{
        await User.create(data);
        const all=await User.find();
        console.log(all)
    }catch(e){
        process.exit(1);
    };
};

const deleteData=async ()=>{
    try{
        await User.deleteMany();
    }catch(e){
        process.exit(1);
    };
};

if( process.argv[2] === "insert" ){
    importData();
} else if( process.argv[2] === "delete"){
    deleteData();
};