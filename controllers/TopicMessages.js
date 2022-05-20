import Message from "../models/Message.js";
import Topic from "../models/Topic.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const getAllMessagesForTopic = async (req, res, next) => {
	try {
		const { id }  = req.params;
		const topic = await Topic.findById(id); 
		const topicMessages = await Message.find({"messageTopic": [id]}).sort({updatedAt: -1}).populate('messageAuthor')
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
		const message = await Message.create({ messageText, messageTime, messageReactions, messageEmoLvl, messageAuthor, messageTopic });
		res.json({
			data: message,
			success: true,
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