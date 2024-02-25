const express = require('express');
const chatController = require('../controller/chatController');

const router = express.Router();

router.get("/", chatController.loginUser);

router.get('/chat', chatController.getChat);

router.post('/chat', chatController.postChat)

router.get('/get-chat-data', chatController.getChatData);
module.exports = router;