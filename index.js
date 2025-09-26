
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import {connectDB} from "./library/db.js";
import authroutes from "./routes/auth.route.js";
import messageroutes from "./routes/message.route.js";
const app = express();

//const port = process.env.port;
const port=5001;
app.use(express.json());
app.use(cors({origin:env.}))
app.use("/api/auth",authroutes,messageroutes);
app.listen(port,(req,res)=>{
console.log("server is running"+port);
connectDB();
})