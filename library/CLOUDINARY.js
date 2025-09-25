import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config();

cloudinary.config({
  name : process.env.cloudinary_name, 
key:process.env.cloudinary_API_KEY, 
secret:process.env.cloudinary_API_SECRET 
});

export default claudinary;