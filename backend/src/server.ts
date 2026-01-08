import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DBConnect } from "./models/dbConnection.js";
import authRouter from "./routes/authRouter.js";

const app = express();
dotenv.config();
DBConnect();

app.use(cors({
    origin: "http://localhost:5173",
}))
app.use("/auth", authRouter);


app.listen(process.env.PORT, () => {
    console.log("app is running");
})