import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB_URL = process.env.DB_URL;

export const DBConnect = async () => {
    await mongoose.connect(DB_URL as string);
    console.log("Database connected")

}