const path = require('path');

module.exports.getErrorPageController = (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "error.html"));
};