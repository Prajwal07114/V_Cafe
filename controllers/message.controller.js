import message from "../models/message.model.js";
import User from "../models/user.model.js";


export const usersidebar =async(req,res)=>{
  try {
     const loggedinId = req.user._id;
  const contactsId = await User.find({_id:{$ne:loggedinId}}).select("-password");
  return res.status(200).json({message:"done scene"})
 } 
  catch (error) {
    return res.status(500).json({message:"error occured"})
  }
};

export const getmessage = async (req,res)=>{
 try {
  const {id:chatId} = req.params;
  const myId = req.user._id;
  
  const messages = await message.find({
    $or:[
      {SenderId:chatId,RecieverId:myId}, 
            {SenderId:myId,RecieverId:chatId}, 
    ]})
    return res.status(200).json(messages);
 } catch (error) {
      return res.status(500).json({message:"error occured"})
 }
}


export const sendmessage = async(req,res)=>{
 try {
  const {text,image} = req.body;
  const {id:getterId} = req.params;
  const myId = req.user._id;
  
  let imagesurl;
  if(image){
  const uploaderimage = await cloudinary.uploader.upload(image);
  const imagesurl=uploaderimage.secure_url;


  const newMessage = new message({
    SenderId,
    RecieverId,
    text,
    image : imagesurl
  })
    await newMessage.save(); 
  }
 } catch (error) {
        return res.status(500).json({message:"error occured"})

 }
} 