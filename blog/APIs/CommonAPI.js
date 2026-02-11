import exp from 'express'
import bcrypt from "bcryptjs";

import { UserTypeModel } from '../models/UserModel.js'

export const commonRouter = exp.Router()
import { authenticate } from '../services/authService.js';

//login
commonRouter.post("/login", async (req, res) =>  {
    //authenticate author(public)
        //get user cred object
        let userCred = req.body;
        //call authenticate
        let { token, user } = await authenticate(userCred);
        //save token as http only cookie
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        });
        //send res
        res.status(200).json({message: "author authenticated", payload: user});
    });
    






    //change password
    commonRouter.put("/change-password",async(req,res)=>{
    // get the current password and new password along with email
    let { userId, oldPassword, newPassword} = req.body;
    let user = await UserTypeModel.findOne({ _id:userId});
    // compare the old password
    if(!user){
      return res.status(401).json({message:"no user with this email"})
     }
        //check the current password is correct or not
        let isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Current password is wrong" });
        }

        //hash new password
        let hashedPassword = await bcrypt.hash(newPassword, 10);
        //replace current pass with new one
        user.password = hashedPassword;
        await user.save();
        //send res
        res.json({ message: "Password changed successfully" });
    
})