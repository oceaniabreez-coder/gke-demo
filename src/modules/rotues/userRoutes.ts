import { Router,Request,Response } from "express";
import { getUsers } from "../services/userService";

const userRouter = Router();

userRouter.get("/",async (req:Request,res:Response)=>{
    try {
        const users = await getUsers();
        res.status(200).send(users);
    } catch (error) {
        
    }
})

export default userRouter;