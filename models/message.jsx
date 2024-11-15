import { Schema } from "mongoose";
import mongoose from "mongoose";

const messageSchema = new Schema({
  first_name: String,
  last_name: String,
  phone: Number,
  email: String,
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;
