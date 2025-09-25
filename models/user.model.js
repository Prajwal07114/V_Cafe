import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const userSchema = new Schema(
  {
    Name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilepic: { type: String, default: "" },
  },
  { timestamps: true }
);


const User = models.User || model("User", userSchema);

export default User;
