import express,{Request,Response} from 'express'
import userRouter from './modules/rotues/userRoutes';

const app = express();

app.use(express.json());
app.use("/api/users",userRouter);

app.use("/",(req:Request,res:Response)=>{
    try {
        res.send("wellcome to project 001")
    } catch (error) {
        
    }
});

const PORT = process.env.port || 8080
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})