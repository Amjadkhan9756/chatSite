import mongoose from "mongoose";
import { Schema, Types, model } from 'mongoose';


interface IUser { 
    fullname: string,
    username: string,
    email:string,
    password:string

}


const userSchema = new mongoose.Schema<IUser>({
  fullname:{
    type: String,
  },
  username:{
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