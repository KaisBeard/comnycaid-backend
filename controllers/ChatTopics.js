import Chat from "../models/Chat.js";
//import Message from "../models/Message.js";
//import Reaction from "../models/Reaction.js";
import Topic from "../models/Topic.js";
//import User from "../models/User.js";

const getAllTopicsForChat = async (req, res, next) => {
	try {
		const { id } = req.params;
	  const chat = await Chat.findById(id); 
	  const topics = await Topic.find({"chatId" : `${id}`}) //probably wrong command
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


export { 
	getAllTopicsForChat,
  }