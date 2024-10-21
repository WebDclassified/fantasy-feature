function PlayerCard({ player, togglePlayerSelection, isSelected }) {
    return (
      <div
        className={`p-4 border rounded-lg cursor-pointer ${
          isSelected ? 'border-blue-500' : 'border-gray-300'
        }`}
        onClick={() => togglePlayerSelection(player.name)}
      >
        <h3 className="text-lg font-bold">{player.name}</h3>
        <p>Points: {player.points}</p>
      </div>
    );
  }
  
  export default PlayerCard;
  