import express from "express";
import 'dotenv/config'
import applyMiddlewares from "./middlewares/index.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";
import userRoute from './routes/users.js'
const app = express();

applyMiddlewares(app)

// Routing Handling
app.use(userRoute)

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