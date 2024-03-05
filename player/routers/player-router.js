const express = require('express');
const playerController = require('../controllers/playerController');

const router = express.Router();

router.get('/', playerController.getHome);

router.get('/add-player', playerController.getAddPlayer);

router.post('/add-player', playerController.postAddPlayer);

router.get('/search-player', playerController.getSearchPlayer);

router.post('/search-player', playerController.postSearchPlayer);

router.post('/update-player', playerController.postUpdatePlayer);

module.exports = router;