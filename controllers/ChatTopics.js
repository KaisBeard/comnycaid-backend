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
		//msg: `pet with id ${pet.id} successfully created`
	  })
	} catch(err) {
	  next(err)
	}
}

const deleteTopic = async (req, res, next) => {
	try {
	  const { id } = req.params
  
	  const topic = await Topic.findByIdAndDelete(id);
  
	  res.json({
		data: topic,
		success: true,
		//msg: `pet with id ${id} has been successfully deleted!`
	  })
	} catch(err) {
	  next(err)
	}
  }

  const editTopic = async (req, res, next) => {
	try {
		const {
			topicTitle,
			topicDesc,
			chatId
		} = req.body;
		const topic = await Topic.findByIdAndUpdate({ topicTitle, topicDesc, chatId });
	  	res.json({
			data: topic,
			//msg: `pet with id ${id} successfully updated`,
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