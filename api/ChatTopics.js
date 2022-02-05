import express from "express";
import {
    getUsers
} from "../controllers/User.js";

import {
    getAllTopicsForChat
} from "../controllers/ChatTopics.js";



const api = express.Router();

api
    .route('/:id')
    .get(getAllTopicsForChat)
    .post(createTopic) //different path?
	.delete(deleteTopic)
	.put(editTopic)

export default api;
