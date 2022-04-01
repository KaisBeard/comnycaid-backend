import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema({
	
    messageText: {
        type: String,
      },
    messageTime: {
        type: String,
      }, 
    messageReactions: {
        type: String,
      },
    messageEmoLvl: {
        type: String,
      }, 
    messageAuthor: {
        type: Schema.ObjectId,
        ref: 'User'
      },
    messageTopic: {
        type: Schema.ObjectId,
        ref: 'Topic'
      }, 
}, {timestamps: { createdAt: 'created_at' } }
);

const MessageModel = mongoose.model('Message', MessageSchema)

export default MessageModel;



