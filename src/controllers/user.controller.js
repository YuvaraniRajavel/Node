const User = require('../models/user.model');
exports.createUser = async(req, res)=>{
try{
    const {name, email, password} = req.body;
    const newUser = await User.create({name, email, password});
    console.log('user created');
    res.status(201).json(newUser);
}catch(error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Failed to create user' });
}

};
