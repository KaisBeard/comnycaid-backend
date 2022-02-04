import express from "express";
import {
    getAllMessagesForTopic,
	createMessage,
	deleteMessage,
	editMessage
} from "../controllers/TopicMessages.js";

const api = express.Router();

api
    .route('/:id')
    .get(getAllMessagesForTopic)
    .post(createMessage) //different path?
	.delete(deleteMessage)
	.put(editMessage)
export default api;


/*
I need: 
delete message
delete topic
delete chat

edit message
edit topic
edit chat

post messages
post topic
post chat


*/