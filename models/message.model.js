import mongoose from "mongoose";
import User from "./user.model.js";

const messageschema = new mongoose.Schema({
  SenderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User,
    req:true,
  },
  RecieverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User,
    req:true,
  },
  text:{
    type:String
  },
    Image:{
    type:String
  },
},
{timestamps:true})

const message = mongoose.model("message",messageschema)

export default message;