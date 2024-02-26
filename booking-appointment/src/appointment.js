const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.get('/', userController.getHome);

router.get('/get-all-appointments', userController.getAllAppointments);

router.post('/add-appointment', userController.postAddAppointment);

router.post('/delete-appointment', userController.deleteAppointment);

module.exports = router;