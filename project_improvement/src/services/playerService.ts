import { Player } from '../types/game';
import playerData from '../data/config/player.json';

// Load player data from JSON
export const loadPlayer = (): Player => {
  // In a real implementation, this would load from a file or database
  // For now, we'll return the default player data
  return { ...playerData } as Player;
};

// Save player data to JSON
export const savePlayer = (player: Player): void => {
  // In a real implementation, this would save to a file or database
  // For now, we'll just log the player data
  console.log('Saving player data:', player);
};

// Update player data
export const updatePlayer = (player: Player, updates: Partial<Player>): Player => {
  return { ...player, ...updates };
};

// Update player stats
export const updatePlayerStats = (player: Player, stats: Partial<Player['stats']>): Player => {
  const updatedStats = { ...player.stats, ...stats };
  return { ...player, stats: updatedStats };
};