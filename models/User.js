import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
	
    userName: {
        type: String,
      },
    userPhone: {
        type: String,
      }, 
    userEmail: {
        type: String,
      },
    userActivity: {
        type: String,
      }, 
});

const UserModel = mongoose.model('User', UserSchema)

export default UserModel;



