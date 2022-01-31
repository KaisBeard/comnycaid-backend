import mongoose from "mongoose";
const { Schema } = mongoose;

const TopicSchema = new Schema({
	
    topicTitle: {
        type: String,
      },
    topicDesc: {
        type: String,
      }, 
    chatId: {
        type: Schema.ObjectId,
        ref: 'Chat'
      },  
});

const TopicModel = mongoose.model('Topic', TopicSchema)

export default TopicModel;



