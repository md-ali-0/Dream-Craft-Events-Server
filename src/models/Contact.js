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
}, { versionKey: false }); 

const Contact = model('Contact', contactSchema);

export default Contact;
