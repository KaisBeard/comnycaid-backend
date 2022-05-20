import User from "../models/User.js";

const getUsers = async (req, res, next) => {
	try {
		const users = await User.find(req.query);
		res.json({
			data: users,
			msg: 'list of all users in the db',
			success: true
		})
	} catch(err) {
	  	next(err)
	  	console.log(error)
	}
}

export { 
	getUsers
}