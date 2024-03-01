import { Schema, model } from "mongoose";

const NewsSchema = new Schema(
  {
   
    email: { type: String, required: true },
    
  },
  { versionKey: false }
);

const news = model("news", NewsSchema);

export default news;