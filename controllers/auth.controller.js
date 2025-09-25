
import User from "../models/user.model.js";
import { generateToken  } from "../library/utils.js";
import bcrypt, { compare } from "bcrypt";

export const signup = async (req, res) => {
  const { email, Name, password } = req.body;

  try {
    // Check password length
     if (!Name || !email || !password) {
      return res.status(400).json({ message: "All fields (Name, Email, Password) are required" });
    }
    if (  password.length < 9) {
      return res.status(400).json({ message: "Password must be at least 9 characters long" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      Name,
      email,
      password: hash,
    });

   
    await newUser.save();
    generateToken (newUser._id, res);

    return res.status(201).json({
      _id: newUser._id,
      Name: newUser.Name,
      email: newUser.email,
      profilepic: newUser.profilepic,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req,res)=>{
  const {password,email} =  req.body;
  try {
        const user = await User.findOne({email});

          if(!user){
          return res.status(500).json({message:"invalid credintialls"})
        }   
        const pass = await bcrypt.compare(password,user.password)
        if(!pass){
           return res.status(500).json({message:"invalid credintialls"})
        }
        
                 generateToken(user._id,res)

                 return res.status(200).json({
                  _id:user._id,
                  Name: user.Name,
                  email: user.email,
                  profilepic: user.profilepic,
                 })
        
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const logout = (req,res)=>{
  try {
    res.cookie("jwt","",{maxAge:0})
  return res.status(200).json({message:"Logout succecfully"})
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}

export const updateprofile =  async(req,res)=>{
 try {
  const {profilepic} = req.body;
  const UserId = req.user._id;

  if(!profilepic){
    return res.status(400).json({message:"Credential(pic) Not Available"})
  }
const UploadResponse = await cloudinary.uploader.upload(profilepic)

const updateprofile = await User.findByIdAndUpdate(
  userId,
    {profilepic:UploadResponse.secure_url},

{new:true},
  
);
const {Name} = req.body;
    const userId = req.user._id;
    if(!Name){
      return res.status(400).json({message:"not available"})
    }
    const Updatedate = await user.findByIdAndUpdate(
      userId,{
        Name:Name
      },
      {new:true}
    )
return res.status(200).json({message:"data updated"})
 } catch (error) {
      return res.status(400).json({message:"error spotted"})
 } 

}
np
export const authcheck = async (req,res)=>{
  try {
    return res.status(200).json(req.user)
  } catch (error) {
          return res.status(400).json({message:"error spotted"})
  }
}