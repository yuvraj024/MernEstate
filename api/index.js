import express from 'express';
import mongoose from "mongoose"
import * as dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Mongo DB connected!');
}).catch((err)=>{
    console.log("Not connected!");
    console.log(err);
});

const app=express();

app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
}
);

// app.get('/test',(req,res)=>{
//     res.send("Hello Motto!");
// })

app.use('/api/user',userRouter);