import cookieParser from "cookie-parser";
import cors from 'cors';
import express from 'express';

const applyMiddlewares = (app)=>{
    app.use(cors({
        origin: [process.env.CLIENT]
    }))
    app.use(cookieParser())
    app.use(express.json())
}

export default applyMiddlewares
