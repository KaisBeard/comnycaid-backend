import express from "express";
import {
    getUsers
} from "../controllers/User.js";

import {
    getAllChatsForUser
} from "../controllers/UserChats.js";



const api = express.Router();

api
    .route('/:id')
    .get(getAllChatsForUser)

export default api;
