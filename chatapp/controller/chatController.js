const path = require('path');

module.exports.loginUser = (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
};