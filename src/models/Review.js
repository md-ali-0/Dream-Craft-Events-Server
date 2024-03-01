import { Schema, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
    email: { type: String, required: true },
    time: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { versionKey: false }
);

const review = model("review", ReviewSchema);

export default review;
