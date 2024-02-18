const express = require('express');
const chatController = require('../controller/chatController');

const router = express.Router();

router.get("/", chatController.loginUser);

// router.post("/login-user", chatController.postLoginUser);

module.exports = router;