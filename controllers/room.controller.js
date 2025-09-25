import message from "../models/message.model.js";
import Room from "../models/room.model.js"
import User from "../models/user.model.js"


export const roomdata = async (req,res)=>{
  const {Name} = req.body;
  const userId = req.user._Id;
  try {
    if(!Name){
      return res.status(500).json({message:"name needed"})
    }
  const newroom = await Room.create({
    Name,
    members:[userId]
  })
  return res.status(200).json({message:"Room created succesfully",newroom})
  } catch (error) {
    return res.status(500).json({message:"Error occured",error})
  }
}
export const rooms_data = async(req,res)=>{
  try {
    const getmultiplerooms = await Room.find().populate("members");
    if(getmultiplerooms.length==0){
      return res.status(500).json({message:"room not found"})
    }
    return res.status(200).json({message:"rooms found",getmultiplerooms});
  } catch (error) {
          return res.status(500).json({message:"room not found",error})
  }
}
export const room_id = async(req,res)=>{
  const {id} = req.params;
try {
  const getroom = await Room.findById(id).populate("members");
  if(!getroom){
    return res.status(500).json({message:"room not found"})
  }
  
    return res.status(200).json({message:"Room id Found",getroom})
} catch (error) {
return res.status(500).json({message:"error occured",error})
}
}
export const joinroom = async(req,res)=>{
  const room = req.body;
  try {
    if(!room){
      return res.status(500).json({message:"Rooms doesn't exist"})
    }
const roomId = await room.findById(req.params.Id);{
  if(!roomId){
    return res.status(500).json({message:"room not found"})
  }
  if(!roomId.members.includes(roomId.User._Id)){
    roomId.members.push(roomId.User._Id);
    await roomId.save()
  }
}
return res.status(200).json({message:"Successfull"})
  } catch (error) {
    return res.status(500).json({message:"Error occured"})
  }
  
}

export const users_room = async(req,res)=>{
  const User_Id = req.params.Id;
  try {
    const loggedinusers_room = await Room.find({members:User_Id}).populate("members");
    if(loggedinusers_room.length===0){
      return res.status(500).json({message:"room not found"})
    }
    return res.status(200).json({message:"User's room"},loggedinusers_room);
  } catch (error) {
          return res.status(500).json({message:"room not found"})
  }
}

export const leaveroom = async(req,res)=>{
const userId = req.User_Id;
const {id:roomId}= req.params;
try {
  const room = await Room.findById(roomId);
  if(!room){
    return res.status(500).json({message:"No room found"})
  }

  if(!room.members.includes(userId)){
    return res.status(500).json({message:"User not found"})
  }
room.members=room.members.filter((memberId)=> (memberId.toString()!==userId.toString()));
  if(!room.members.length===0){
    await room.deleteOne();
        return res.status(500).json({message:"Room disband"})
  }
  await room.save();
  return res.status(200).json({message:"succesfull"})
} catch (error) {
      return res.status(500).json({message:"error appeared",error})
}
} 