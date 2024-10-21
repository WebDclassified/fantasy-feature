import { useState, useEffect } from 'react';
import PlayerCard from '../components/PlayerCard';
import { fetchPlayers, createTeam } from '../services/playerService';

function HomePage() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchPlayers().then(setPlayers);
  }, []);

  const togglePlayerSelection = (playerName) => {
    setSelectedPlayers((prev) =>
      prev.includes(playerName)
        ? prev.filter((p) => p !== playerName)
        : [...prev, playerName]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedPlayers.length > 11) {
      setMessage('You can only select 11 players.');
      return;
    }
    const result = await createTeam({ name: teamName, players: selectedPlayers });
    if (result.success) {
      setMessage('Team created successfully!');
      setSelectedPlayers([]);
      setTeamName('');
    } else {
      setMessage('Failed to create team.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Your Fantasy Team</h1>
      {message && <p className="mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <div className="grid grid-cols-3 gap-4">
          {players.map((player) => (
            <PlayerCard
              key={player._id}
              player={player}
              togglePlayerSelection={togglePlayerSelection}
              isSelected={selectedPlayers.includes(player.name)}
            />
          ))}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Create Team
        </button>
      </form>
    </div>
  );
}

export default HomePage;
