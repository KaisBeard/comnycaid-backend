import Chat from "../models/Chat.js";
import User from "../models/User.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const getAllChatsForUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id); 
		const userChats = await Chat.find({"chatMembers": id}) //probably wrong command
		res.json({
		user: user, 
		chats: userChats,
		msg: 'list of all chats of the user',
		success: true
	  	})
	} catch(err) {
	  	next(err)
	}
}

const createChat = async (req, res, next) => {
	try {
	  	const {
			chatName, 
			chatMembers
		} = req.body; 
		const chatMembersIds = chatMembers.map(a => ObjectId(a))
		const chat = await Chat.create({ chatName, chatMembers:chatMembersIds });
	  	res.json({
			data: chat,
			success: true,
	  	})
	} catch(err) {
	  next(err)
	}
}

const deleteChat = async (req, res, next) => {
	try {
	  	const { chatid } = req.params
	  	const chat = await Chat.findByIdAndDelete(chatid);
	  	res.json({
			data: chat,
			success: true,
		})
	} catch(err) {
	  next(err)
	}
}

const editChat = async (req, res, next) => {
	try {
		const { chatid } = req.params;
		const {
			chatName,
			chatMembers,
		} = req.body;
		const chat = await Chat.findByIdAndUpdate(chatid, { chatName, chatMembers });
		res.json({
			data: chat,
			success: true
		})
	} catch(err) {
	  next(err)
	}
}

export { 
	getAllChatsForUser,
	createChat,
	deleteChat,
	editChat
}