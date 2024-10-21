const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  players: [{ type: String, required: true }],
  totalPoints: { type: Number, default: 0 },
});

module.exports = mongoose.model('Team', teamSchema);
