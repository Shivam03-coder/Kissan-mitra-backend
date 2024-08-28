import mongoose from "mongoose";

const senderSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const messageSchema = new mongoose.Schema({
  sender: {
    type: senderSchema, 
    required: true,     
  },
  room: {
    type: String,
    required: true,
  },
  messageType: {
    type: String,
    enum: ["text"],
    required: true,
  },
  content: {
    type: String,
    required: function () {
      return this.messageType === "text";
    },
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const MessageModel = mongoose.model("Message", messageSchema);
export default MessageModel;
