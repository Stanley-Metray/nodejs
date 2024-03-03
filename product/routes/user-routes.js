const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.get('/user', userController.getAddUser);

router.post('/add-user', userController.postAddUser);

module.exports = router;