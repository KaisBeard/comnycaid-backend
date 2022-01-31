import express from "express";
import {
    getUsers
} from "../controllers/User.js";

import {
    getAllMessagesForTopic
} from "../controllers/TopicMessages.js";



const api = express.Router();

api
    .route('/:id')
    .get(getAllMessagesForTopic)

export default api;
