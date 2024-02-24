import 'dotenv/config';
import express from "express";
// import SSLCommerzPayment from 'sslcommerz-lts';

import applyMiddlewares from "./middlewares/index.js";
import eventRouter from './routes/events.js';
import userRoute from './routes/users.js';
import shopRouter from './routes/products.js'
import requestRouter from './routes/organizerRequest/index.js'
import paymentRouter from './routes/sslcommerz/payment.js';
import globalErrorHandler from "./utils/globalErrorHandler.js";
import contactRouter from './routes/Contact.js'
import customEventRouter from './routes/customEvent.js'
const app = express();
// const sslcommerz = SslCommerzPayment
({
  store_id: 'dream65cbc12546a7f',
  store_password: 'dream65cbc12546a7f@ssl',
  is_live: false,
})

applyMiddlewares(app)

// Routing Handling
app.use(userRoute)
app.use(eventRouter)
app.use(shopRouter)
app.use(requestRouter)
app.use(paymentRouter)
app.use(contactRouter) //contact
app.use(customEventRouter) 

app.get("/", (req, res) => {
  res.status(200).send({ massage: "Server is running" });
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find requested ${req.originalUrl} in our server`)
  error.status = 404;
  next(error)
})

app.use(globalErrorHandler)

export default app;