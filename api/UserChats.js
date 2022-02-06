import express from "express";
import {
    getUsers
} from "../controllers/User.js"; //delete that

import {
    getAllChatsForUser,
    createChat,
	deleteChat,
	editChat
} from "../controllers/UserChats.js";



const api = express.Router();

/*api
    .route("/")
    .get()*/

api
    .route('/:id')
    .get(getAllChatsForUser)
    .post(createChat) //different path?
	.delete(deleteChat)
	.put(editChat)

export default api;
