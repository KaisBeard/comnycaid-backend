import express from "express";

import {
    getAllTopicsForChat,
	createTopic,
	deleteTopic,
	editTopic
} from "../controllers/ChatTopics.js";

const api = express.Router();

api
    .route('/:id')
    .get(getAllTopicsForChat)
    .post(createTopic) //different path?

api
    .route('/:id/:topicid')
	.delete(deleteTopic)
	.put(editTopic)

export default api;
