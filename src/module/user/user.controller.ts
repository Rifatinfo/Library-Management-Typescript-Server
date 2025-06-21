import { Request, Response } from "express";
import User from "./user.model";

const registerUser = async (req : Request, res : Response) =>{
   const payload = req.body;
   const user = new User(payload);

   const data = await user.save();
   res.json({
    success : true,
    message : "User register Successfully",
    data
   })
}
const getUser = async (req : Request, res : Response) =>{
    const data = await User.find();
   res.json({
    success : true,
    message : "User retrieved Successfully",
    data
   })
}
export  {registerUser, getUser};