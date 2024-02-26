const path = require('path');
const User = require('../models/user');

const user = new User();
user.connect();
user.createTable();


module.exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "index.html"));
}

module.exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await user.getAllApointments();
        res.send(appointments);
    } catch (error) {
        console.log(err);
    }
}

module.exports.postAddAppointment = async (req, res) => {
    try {
        await user.scheduleAppointment(req.body);
        const appointments = await user.getAllApointments();
        res.send(appointments);
    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteAppointment = async (req, res) => {
    try {
        await user.deleteApointment(req.body.id);
        const appointments = await user.getAllApointments();
        res.send(appointments);
    } catch (error) {
        console.log(err);
    }
}