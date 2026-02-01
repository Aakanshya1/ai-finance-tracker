import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import 'dotenv/config';
const app = express();


app.get('/', (req,res)=>{
    res.send("API is running...")
})
export default app;