const Team = require('../models/Team');
const Player = require('../models/Player');

// Create a new team
exports.createTeam = async (req, res) => {
  try {
    const { name, players } = req.body;
    const playerData = await Player.find({ name: { $in: players } });
    const totalPoints = playerData.reduce((sum, player) => sum + player.points, 0);

    const team = new Team({
      name,
      players,
      totalPoints,
    });

    await team.save();
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: 'Error creating team' });
  }
};

// Get a team by ID
exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching team' });
  }
};
