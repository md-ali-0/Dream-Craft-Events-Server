import cookieParser from "cookie-parser";
import cors from 'cors';
import express from 'express';
import "dotenv/config";

const applyMiddlewares = (app)=>{
    app.use(cors({
        origin: [process.env.CLIENT],
        credentials:true
    }))
    app.use(cookieParser())
    app.use(express.json())
}

export default applyMiddlewares
