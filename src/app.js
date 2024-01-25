import express from "express";
import { config } from 'dotenv'
import applyMiddlewares from "./middlewares/index.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";
config()
const app = express();

applyMiddlewares(app)

app.get("/", (req, res) => {
  res.status(200).send({ massage: "Server is running" });
});

app.all("*", (req, res, next)=>{
  const error = new Error(`Can't find requested ${req.originalUrl} in our server`)
  error.status = 404;
  next(error)
})

app.use(globalErrorHandler)

export default app;