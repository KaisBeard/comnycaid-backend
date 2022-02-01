import express from "express";
import dotenv from "dotenv";
//import connectDB from "./dbinit.js";
import mongoose from "mongoose";
import Users from "./api/User.js"
import UserChats from "./api/UserChats.js"
import ChatTopics from "./api/ChatTopics.js"
import TopicMessages from "./api/TopicMessages.js"
import cors from "cors";

dotenv.config();

//connectDB();
mongoose
	.connect(process.env.MONGODB_URI)
	.then((e) => console.log("Database connected"))
	.catch((e) => console.log("error", e));

const PORT = process.env.PORT || '3001';
const server = express();
//server.set("port", PORT);
server.use(cors());
server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to the server!'));
server.use('/user', Users);
server.use('/userchats', UserChats);
server.use('/chattopics', ChatTopics);
server.use('/topicmessages', TopicMessages);
//Login later

//server.use(errorHandler);


server.listen(PORT, () => console.log(`server started on ${PORT}`))