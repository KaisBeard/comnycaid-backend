//import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
//import Reaction from "../models/Reaction.js";
import Topic from "../models/Topic.js";
//import User from "../models/User.js";
import mongoose from "mongoose";
//import { objectId } from "mongoose";
const { ObjectId } = mongoose.Types;

const getAllMessagesForTopic = async (req, res, next) => {
	
	
	try {
		const { id }  = req.params;
		
	  const topic = await Topic.findById(id); 
	  const topicMessages = await Message.find({"messageTopic": [id]}).sort('messageTime').populate('messageAuthor')
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

  const createMessage = async (req, res, next) => {
	try {
	  const {
		messageText,
		messageTime,
		messageReactions,
		messageEmoLvl,
		messageAuthor,
		messageTopic
	  } = req.body;
	  const topicId = Topic._id
	  const message = await Message.create({ messageText, messageTime, messageReactions, messageEmoLvl, messageAuthor, messageTopic:topicId });

	  res.json({
		data: message,
		success: true,
		//msg: `pet with id ${pet.id} successfully created`
	  })
	} catch(err) {
	  next(err)
	}
}

const deleteMessage = async (req, res, next) => {
	try {
	  const { messageid } = req.params
  
	  const message = await Message.findByIdAndDelete(messageid);
  
	  res.json({
		data: message,
		success: true,
		//msg: `pet with id ${id} has been successfully deleted!`
	  })
	} catch(err) {
	  next(err)
	}
  }

  const editMessage = async (req, res, next) => {
	try {
	const { messageid } = req.params;
	const {
		messageText,
		messageTime,
		messageReactions,
		messageEmoLvl,
		messageAuthor,
		messageTopic
	  } = req.body;
	  const message = await Message.findByIdAndUpdate(messageid, { messageText, messageTime, messageReactions, messageEmoLvl, messageAuthor, messageTopic });
	  res.json({
		data: message,
		//msg: `pet with id ${id} successfully updated`,
		success: true
	  })
	} catch(err) {
	  next(err)
	}
  }

export { 
	getAllMessagesForTopic,
	createMessage,
	deleteMessage,
	editMessage
  }