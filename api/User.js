import express from "express";
import {
    getUsers
} from "../controllers/User.js";

const api = express.Router();

api
    .route('/')
    .get(getUsers)

export default api;
