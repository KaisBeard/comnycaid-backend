import express from "express";
import {
    getUsers
} from "../controllers/User.js"; //delete that

import {
    getAllChatsForUser
} from "../controllers/UserChats.js";



const api = express.Router();

/*api
    .route("/")
    .get()*/

api
    .route('/:id')
    .get(getAllChatsForUser)

export default api;
