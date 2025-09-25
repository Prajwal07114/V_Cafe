import mongoose from "mongoose";
import User from "./user.model";

const chatschema = new mongoose.Schema({
  room:{
    Name:{type:String},
    adminId:{type:mongoose.Schema.Types.ObjectId,ref:User},
    members:[{type:mongoose.Schema.Types.ObjectId,ref:User}],
    private:{default:false},
    }
  },{timestamps:true}
)