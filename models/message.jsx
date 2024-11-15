import { Schema } from "mongoose";
import mongoose from "mongoose";

const messageSchema = new Schema({
  first_name: { type: String, required: true }, // Make first_name required
  last_name: { type: String, required: true }, // Make last_name required
  phone: { type: Number, required: true }, // Make phone required
  email: { type: String, required: true }, // Make email required
  comment: { type: String, required: true }, // Make comment required
  createdAt: { type: Date, default: Date.now },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;
