const express = require('express');
const { createTeam, getTeamById } = require('../controllers/teamController');

const router = express.Router();

// Route: POST /teams
router.post('/', createTeam);

// Route: GET /teams/:id
router.get('/:id', getTeamById);

module.exports = router;
