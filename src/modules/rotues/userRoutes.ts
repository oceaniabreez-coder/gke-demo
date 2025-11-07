import { Router,Request,Response } from "express";
import { console } from "inspector";

const userRouter = Router();

let users = [
    {id :1, userName : 'ruwanga'},
    {id:2, userName : 'dinusha' }
]

userRouter.get("/",(req:Request,res:Response)=>{
    try {
        res.send(users);
    } catch (error) {
        
    }
})

export default userRouter;