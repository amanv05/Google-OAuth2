import { type Request, type Response } from "express";
import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();
import { googleOauth2Client } from "../utils/googleConfig.js";
import { userModel } from "../models/userModel.js";



export const googleLogin = async (req: Request, res: Response) => {
    try {
        const { code } = req.query;
        const googleRes = await googleOauth2Client.getToken(code as string);
        googleOauth2Client.setCredentials(googleRes.tokens);

        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)

        const { email, name, picture } = userRes.data;
        let user = await userModel.findOne({email});
        if (!user) {
            user = await userModel.create({
                name: name,
                email: email,
                image: picture,
            });
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT Secret is missing")
        }

        const id = user._id;
        const token = jwt.sign({id, email}, process.env.JWT_SECRET, {
            expiresIn: "24h",
        })

        return res.status(200).json({
            message: "success",
            token,
            user
        })
    } 
    catch (e) {
        return res.status(500).json({
            message: "Internal Server Error",
        })

    }
}