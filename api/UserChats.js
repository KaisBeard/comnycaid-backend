import express from "express";

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

    api
    .route('/:id/:chatid')
        .delete(deleteChat)
        .put(editChat)

export default api;
