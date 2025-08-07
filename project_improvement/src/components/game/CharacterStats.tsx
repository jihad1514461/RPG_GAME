import { Player } from '../../types/game';
import { capitalize } from '../common/utils';

interface CharacterStatsProps {
  player: Player;
}

const CharacterStats = ({ player }: CharacterStatsProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Character Stats</h2>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <span className="font-semibold">Name:</span> {player.name}
        </div>
        <div>
          <span className="font-semibold">Class:</span> {capitalize(player.activeClass)}
        </div>
        <div>
          <span className="font-semibold">Level:</span> {player.level}
        </div>
        <div>
          <span className="font-semibold">XP:</span> {player.xp}
        </div>
        <div>
          <span className="font-semibold">Strength:</span> {player.stats.strength}
        </div>
        <div>
          <span className="font-semibold">Intelligence:</span> {player.stats.intelligence}
        </div>
        <div>
          <span className="font-semibold">Vitality:</span> {player.stats.vitality}
        </div>
        <div>
          <span className="font-semibold">Magic:</span> {player.stats.magic}
        </div>
        <div>
          <span className="font-semibold">Gold:</span> {player.stats.gold}
        </div>
        <div>
          <span className="font-semibold">Reputation:</span> {player.stats.reputation}
        </div>
      </div>
    </div>
  );
};

export default CharacterStats;