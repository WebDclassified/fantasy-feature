const express = require('express');
const { getAllPlayers } = require('../controllers/playerController');

const router = express.Router();

// Route: GET /players
router.get('/', getAllPlayers);

module.exports = router;
