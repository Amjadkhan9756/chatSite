import mongoose from "mongoose";
import { Schema, Types, model } from 'mongoose';


interface IUser { 
    fullName: string,
    userName: string,
    email:string,
    password:string

}


const userSchema = new mongoose.Schema<IUser>({
  fullName:{
    type: String,
  },
  userName:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true    
  }

})

const User = mongoose.model("User", userSchema);

export default User;