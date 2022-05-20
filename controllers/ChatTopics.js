import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
import Topic from "../models/Topic.js";

const getAllTopicsForChat = async (req, res, next) => {
	try {
		const { id } = req.params;
		const chat = await Chat.findById(id); 
		const topics = await Topic.find({"chatId" : `${id}`}).sort({updatedAt: -1}); // needs to be an object why is this not working?
		const messages = await Message.find({"topicid" : `${Topic._id}`})
		res.json({
			chat: chat, 
			topics: topics,
			msg: 'list of topics in the chat',
			success: true
		})
	} catch(err) {
	  next(err)
	}
}

const createTopic = async (req, res, next) => {
	try {
		const {
			topicTitle,
			topicDesc,
			chatId
		} = req.body;
		const topic = await Topic.create({ topicTitle, topicDesc, chatId });
		res.json({
			data: topic,
			success: true,
		})
	} catch(err) {
	  next(err)
	}
}

const deleteTopic = async (req, res, next) => {
	try {
		const { topicid } = req.params;
	  	const topic = await Topic.findByIdAndDelete(topicid);
	  	res.json({
			data: topic,
			success: true,
	  	})
	} catch(err) {
	  next(err)
	}
}

const editTopic = async (req, res, next) => {
	try {
		const { topicid } = req.params;
		const {
			topicTitle,
			topicDesc,
			chatId
		} = req.body;
		const topic = await Topic.findByIdAndUpdate(topicid, { topicTitle, topicDesc, chatId });
	  	res.json({
			data: topic,
			success: true
	  	})
	} catch(err) {
	  next(err)
	}
}

export { 
	getAllTopicsForChat,
	createTopic,
	deleteTopic,
	editTopic
}