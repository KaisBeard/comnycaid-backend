import mongoose from "mongoose";
const { Schema } = mongoose;

const ChatSchema = new Schema({
  chatName: {
    type: String,
  },
  chatMembers: [
    {
    type: Schema.ObjectId,
    ref: 'User',
    },
  ], 
});

const ChatModel = mongoose.model('Chat', ChatSchema)

export default ChatModel;



