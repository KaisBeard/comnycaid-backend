import express from "express";
import dotenv from "dotenv";
//import dotenv from 'dotenv/config'
//import 'dotenv/config'
//import connectDB from "./dbinit.js";
import mongoose from "mongoose";
import Users from "./api/User.js"
import UserChats from "./api/UserChats.js"
import ChatTopics from "./api/ChatTopics.js"
import TopicMessages from "./api/TopicMessages.js"
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

dotenv.config();


//connectDB();
mongoose
	.connect(process.env.MONGODB_URI)
	.then((e) => console.log("Database connected"))
	.catch((e) => console.log("error", e));

const PORT = process.env.PORT || '3001';
const server = express();
const httpServer = createServer(server);

const io = new Server(httpServer, {
	cors: {
		origin: ["http://localhost:3000", "http://localhost:3001" ], //Is it this server or the other server?
		methods: ["GET", "Post"],
		//"Access-Control-Allow-Origin": "http://localhost:3000/"
	},
	//"Access-Control-Allow-Origin": "http://localhost:3000/"
});

const users = [];

function userJoin(id, authorId, topicId) {
	const user = { id, authorId, topicId };
	users.push(user);
	return user;
  }

function getCurrentUser(id) {
	return users.find(user => user.id === id);
}

//const moment = require('moment');

function formatMessage(username, text) {
  return {
    username,
    text
    //time: moment().format('h:mm a')
  };
}

io.on('connection', (socket) => {
	console.log("socks connected!")
	socket.on('joinTopic', ({ authorId, topicId }) => {
		const user = userJoin(socket.id, authorId, topicId);
		socket.join(user.topicId);
		console.log(authorId + " joined the topic " + topicId)
	})
	socket.on('chatMessage', (msg) => {
		console.log("recieved the following message")
		console.log(msg)
		const user = getCurrentUser(socket.id);
		console.log(user)
		io.to(user.topicId).emit('message', msg); //user.authorId,
		console.log(io.to(user.topicId))
		console.log("sends message to" + user.topicId)
		//console.log('message: ', msg, "room: ", user.topicId); //user.authorId,
	});
	
	//socket.on('chat message', (msg) => {
      //io.emit('chat message', msg);
	  //send to chats and send via props to topic and map

    //console.log(msg)  })
    });

server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to the server!'));
server.use('/user', Users);
server.use('/userchats', UserChats);
server.use('/chattopics', ChatTopics);
server.use('/topicmessages', TopicMessages);
//Login later
//server.use(errorHandler);

httpServer.listen(PORT, () => console.log(`server started on ${PORT}`))