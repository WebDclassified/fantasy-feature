import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTeamById } from '../services/teamService';

function TeamPage() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetchTeamById(id).then(setTeam);
  }, [id]);

  if (!team) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Team: {team.name}</h1>
      <h2 className="text-xl mb-2">Players:</h2>
      <ul className="list-disc pl-5">
        {team.players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <p className="mt-4">Total Points: {team.totalPoints}</p>
    </div>
  );
}

export default TeamPage;
