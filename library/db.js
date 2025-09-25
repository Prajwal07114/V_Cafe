import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/chat", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected with Mongoose");
  } catch (err) {
    console.error("❌ DB Connection Error:", err.message);
  }
};
