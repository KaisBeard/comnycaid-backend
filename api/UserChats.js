import express from "express";
import mongoose from "mongoose";

import {
    getAllChatsForUser,
    createChat,
	deleteChat,
	editChat
} from "../controllers/UserChats.js";

const api = express.Router();

//if( !mongoose.Types.ObjectId.isValid(id) ) return false;
/*api
    .route("/")
    .get()*/

api
    .route('/:id')
        .get(getAllChatsForUser)
        .post(createChat) 
        
        

    api
    .route('/:id/:chatid')
        .delete(deleteChat)
        .put(editChat)

export default api;
