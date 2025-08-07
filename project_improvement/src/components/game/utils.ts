import { Player } from '../../types/game';

// Utility functions for game components

export const getPlayerStatsSummary = (player: Player): string => {
  return `Name: ${player.name}
Class: ${player.activeClass}
Level: ${player.level}
XP: ${player.xp}
Strength: ${player.stats.strength}
Intelligence: ${player.stats.intelligence}
Vitality: ${player.stats.vitality}
Magic: ${player.stats.magic}
Gold: ${player.stats.gold}
Reputation: ${player.stats.reputation}`;
};

export const getPlayerHealthInfo = (player: Player): string => {
  return `Hearts: ${player.hearts}/${player.maxHearts}
Mana: ${player.mana}/${player.maxMana}`;
};

export const getPlayerEquipmentInfo = (player: Player): string => {
  const equipment = player.equipment;
  const equipmentList = Object.entries(equipment)
    .filter(([slot, item]) => item)
    .map(([slot, item]) => `${slot}: ${item?.name}`)
    .join('\n');
  
  return equipmentList || 'No equipment';
};