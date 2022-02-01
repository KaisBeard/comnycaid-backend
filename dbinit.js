// import mongoose from 'mongoose';
const mongoose = require("mongoose");

const connectDB = async () => {

  const conn = await mongoose.connect(process.env.MONGO_URI);
  
  console.log(`Mongo DB connected ${conn.connection.host}`);
}

export default connectDB;