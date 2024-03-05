const path = require('path');
const {Player} = require('../models/player');

module.exports.getHome = (req,res)=>{
    res.sendFile(path.join(__dirname, "../views", "index.html"));
}

module.exports.getAddPlayer = (req,res)=>{
    res.sendFile(path.join(__dirname, "../views", "add-player.html"));
}

module.exports.postAddPlayer = async(req,res)=>{
    try {
        console.log(req.body);
        const createdPlayer = await Player.create(req.body);
        if(createdPlayer)
            res.status(200).send(createdPlayer);
        else
            res.status(500).send("Internal Server Error");

    } catch (error) {
        return error;
    }
}


module.exports.getSearchPlayer = (req,res)=>{
    res.sendFile(path.join(__dirname, "../views", "search-player.html"));
}

module.exports.postSearchPlayer = async(req,res)=>{
    try {
        const player = await Player.findOne({
            where : {
                name : req.body.name
            }
        });
        
        if(player===null)
            res.status(500).send("Player Not Found");
        else
            res.status(200).send(player);
            
    } catch (error) {
        console.log(error);
    }
}

module.exports.postUpdatePlayer = async(req,res)=>{
    try {
        console.log(req.body);
        const id = req.body.id;
        delete req.body.id;

        const updatedPlayer = await Player.update(req.body, {
            where : {
                id : id
            }
        });
        if(updatedPlayer)
            res.status(200).send(true);
        else
            res.status(404).send(false);
    } catch (error) {
        console.log(error);
    }
}