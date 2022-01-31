import Chat from "../models/Chat.js";
//import Message from "../models/Message.js";
//import Reaction from "../models/Reaction.js";
//import Topic from "../models/Topic.js";
import User from "../models/User.js";

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


export { 
	getAllChatsForUser,
  }