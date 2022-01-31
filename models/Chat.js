import mongoose from "mongoose";
const { Schema } = mongoose;

const ChatSchema = new Schema({
	
  chatName: {
      type: String,
    },
  chatMembers: {
    type: Schema.ObjectId,
    ref: 'User'
    //type: Array, //Do I need to refer to user ids here?
    }, 
});

const ChatModel = mongoose.model('Chat', ChatSchema)

export default ChatModel;



