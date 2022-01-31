import User from "../models/User.js";

const getUsers = async (req, res, next) => {
	try {
	  const users = await User.find({}); //.populate('userId');
	  res.json({
		data: users,
		msg: 'list of all users in the db',
		success: true
	  })
	} catch(err) {
	  next(err)
	}
  }

/*
Server.get("/planets", (req, res) => {
	Planet.find({})
		.then((result) => res.send(result))
		.catch((e) => res.send(e.message));
}); */

export { 
	getUsers,
  }