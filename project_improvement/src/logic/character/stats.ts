import { Player, PlayerStats, Equipment } from '../../types/game';

export const getEquippedStats = (equipment: Equipment): Partial<PlayerStats & { hearts: number; maxHearts: number }> => {
  const bonusStats: Partial<PlayerStats & { hearts: number; maxHearts: number }> = {};
  
  Object.values(equipment).forEach(item => {
    if (item?.effects) {
      Object.entries(item.effects).forEach(([stat, value]) => {
        bonusStats[stat as keyof typeof bonusStats] = (bonusStats[stat as keyof typeof bonusStats] || 0) + (value as number);
      });
    }
  });
  
  return bonusStats;
};

export const getTotalPlayerStats = (player: Player): PlayerStats & { hearts: number; maxHearts: number } => {
  const baseStats = { ...player.stats, hearts: player.hearts, maxHearts: player.maxHearts };
  const equipmentStats = getEquippedStats(player.equipment);
  
  const totalStats = { ...baseStats };
  Object.entries(equipmentStats).forEach(([stat, value]) => {
    if (stat in totalStats) {
      totalStats[stat as keyof typeof totalStats] += value as number || 0;
    }
  });
  
  return totalStats;
};

export const applyStatIncrease = (player: Player, stat: keyof PlayerStats, amount: number): Player => {
  const newStats = { ...player.stats };
  newStats[stat] += amount;
  
  const newMaxHearts = stat === 'vitality' 
    ? Math.max(1, newStats.vitality * 2)
    : player.maxHearts;

  const newMaxMana = stat === 'magic'
    ? Math.max(1, newStats.magic * 3)
    : player.maxMana;

  return {
    ...player,
    stats: newStats,
    maxHearts: newMaxHearts,
    maxMana: newMaxMana,
    hearts: Math.min(player.hearts, newMaxHearts),
    mana: Math.min(player.mana, newMaxMana)
  };
};

// Calculate derived stats based on base attributes
export const calculateDerivedStats = (stats: {
  strength: number;
  intelligence: number;
  vitality: number;
  magic: number;
  luck: number;
  charm: number;
  reputation: number;
  gold: number;
}) => {
  return {
    health: stats.vitality * 10,
    mana: stats.magic * 10,
    physicalDamage: Math.floor(stats.strength / 2) + 1, // Base physical damage from strength
    magicalDamage: Math.floor(stats.magic / 2) + 1, // Base magical damage from magic
    luckBonus: Math.floor(stats.luck / 2) + 1, // Luck-based bonuses
    socialInfluence: Math.floor((stats.charm + stats.reputation) / 2) + 1, // Combined social influence
    wealthBonus: Math.floor(stats.gold / 100), // Wealth-based bonuses
  };
};