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
		"Access-Control-Allow-Origin": "http://localhost:3000/"
	},
	"Access-Control-Allow-Origin": "http://localhost:3000/"
});

io.on('connection', (socket) => {
	console.log("socks connected!")
    socket.on('message', (msg) => {
      //io.emit('chat message', msg);
    console.log(msg)
    });
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