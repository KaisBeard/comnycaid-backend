//import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
//import Reaction from "../models/Reaction.js";
import Topic from "../models/Topic";
//import User from "../models/User.js";
import mongoose from "mongoose";
//import { objectId } from "mongoose";

const getAllMessagesForTopic = async (req, res, next) => {
	const { ObjectId } = mongoose.Types;
	
	try {
		const { id }  = req.params;
		
	  const topic = await Topic.findById(id); 
	  //const topicMessages = await Message.find();
	  //const topicMessages = await Message.find({messageTopic: ObjectId(id)})
	  const topicMessages = await Message.find({"messageTopic": [id]}) //probably wrong command
	  res.json({
		topic: topic, 
		messages: topicMessages,
		msg: 'list of all messages of the topic',
		success: true
	  })
	} catch(err) {
	  next(err)
	}
  }


export { 
	getAllMessagesForTopic,
  }