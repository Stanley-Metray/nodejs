const path = require('path');
const {User} = require('../models/user');

module.exports.getAddUser = (req,res)=>{
    res.sendFile(path.join(__dirname, "../views", "user.html"));
}

module.exports.postAddUser = async(req,res)=>{
    try {
        console.log(req.body);
        const createdUser = await User.create(req.body);
        if(createdUser)
            res.send(200, createdUser);
        else
            res.send(404, "Failed To Create User");
    } catch (error) {
        console.log(error);
    }
}