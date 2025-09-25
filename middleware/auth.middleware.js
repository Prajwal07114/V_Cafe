import jwt  from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async(req,res,next)=>{
  try {
    const token = req.cookie.jwt;

  if(!token){
    return res.status(500).json({message:"User not found"});
  }
   const decoded = jwt.verify(token,process.env.JWT_SECRET);
   
   if(!decoded){
    return res.status(500).json({message:" details not certified"})
   }
   const user = await User.findById(decoded.user.Id).select("-password");
   if(!user){
    return res.status(500).json({message:"User not found"});
   }
  req.user=user;
  next();
  } catch (error) {
    return res.status(500).json({message:"User not found"});
  }
}

