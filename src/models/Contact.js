// const mongoose = require("mongoose");
import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});

const Contact = model('contact', contactSchema)

export default Contact;
