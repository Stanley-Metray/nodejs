const path = require('path');
const fs = require('fs');

module.exports.loginUser = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
    const filePath = path.join(__dirname, "../model", "chat.json");

    if (!fs.existsSync(filePath)) {
        fs.writeFile(filePath, "[]", (err) => {
            res.send(err);
        });
    }
};

module.exports.getChat = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "chat.html"));
}

module.exports.postChat = (req, res) => {
    const filePath = path.join(__dirname, "../model", "chat.json");
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err)
                res.send(err);
            else {
                data = JSON.parse(data);
                data.push(req.body);
                fs.writeFile(filePath, JSON.stringify(data), (err) => {
                    console.log(err);
                });
                res.send(data);
            }
        });
    }
}


module.exports.getChatData = (req, res) => {
    const filePath = path.join(__dirname, "../model", "chat.json");
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err)
                res.send(err);
            else {
                data = JSON.parse(data);
                res.send(data);
            }
        });
    }
    else
        res.send("");
}