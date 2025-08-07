import { Player, Item, PlayerStats } from '../../types/game';
import { removeItemFromInventory } from './inventory';

export const useItem = (player: Player, item: Item): Player => {
  if (item.type !== 'consumable') return player;
  
  let updatedPlayer = { ...player };
  
  if (item.effects) {
    const newStats = { ...player.stats };
    let heartsChange = 0;
    let maxHeartsChange = 0;
    let manaChange = 0;
    
    Object.keys(item.effects).forEach(key => {
      if (key === 'hearts') {
        heartsChange = item.effects!.hearts || 0;
      } else if (key === 'maxHearts') {
        maxHeartsChange = item.effects!.maxHearts || 0;
      } else if (key === 'mana') {
        manaChange = item.effects!.mana || 0;
      } else if (key in newStats) {
        newStats[key as keyof PlayerStats] += item.effects![key as keyof PlayerStats] || 0;
      }
    });
    
    updatedPlayer.stats = newStats;
    
    if (maxHeartsChange !== 0) {
      updatedPlayer.maxHearts = Math.max(1, updatedPlayer.maxHearts + maxHeartsChange);
    }
    
    if (heartsChange !== 0) {
      updatedPlayer.hearts = Math.max(0, Math.min(updatedPlayer.maxHearts, updatedPlayer.hearts + heartsChange));
    }
    
    if (manaChange !== 0) {
      updatedPlayer.mana = Math.max(0, Math.min(updatedPlayer.maxMana, updatedPlayer.mana + manaChange));
    }
  }
  
  // Remove the used item
  updatedPlayer = removeItemFromInventory(updatedPlayer, item.id, 1);
  
  return updatedPlayer;
};