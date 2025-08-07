import { Player, PlayerStats, PlayerClass, Equipment, ClassDefinition } from '../../types/game';

export const createPlayer = (
  name: string,
  gender: 'male' | 'female' | 'other',
  race: string,
  playerClass: string,
  raceStats: Partial<PlayerStats>,
  classData: ClassDefinition,
  initialEquipment?: string[]
): Player => {
  const baseStats: PlayerStats = {
    strength: 1,
    intelligence: 1,
    magic: 1,
    vitality: 1,
    luck: 1,
    charm: 1,
    reputation: 1,
    gold: 20,
  };

  // Apply race and class modifiers
  const finalStats = { ...baseStats };
  Object.keys(raceStats).forEach(key => {
    if (key in finalStats) {
      finalStats[key as keyof PlayerStats] += raceStats[key as keyof PlayerStats] || 0;
    }
  });
  Object.keys(classData.baseStats).forEach(key => {
    if (key in finalStats) {
      finalStats[key as keyof PlayerStats] += classData.baseStats[key as keyof PlayerStats] || 0;
    }
  });

  // Only tier 0 classes get starting reputation and gold
  if (classData.tier === 0) {
    finalStats.reputation += classData.reputation;
    finalStats.gold += classData.gold;
  }

  const maxHearts = Math.max(1, finalStats.vitality * 2);
  const maxMana = Math.max(1, finalStats.magic * 3);

  const player: Player = {
    name,
    gender,
    race,
    classes: [{ name: playerClass, level: 1, unlockedAt: 1, tier: classData.tier }],
    activeClass: playerClass,
    stats: finalStats,
    level: 1,
    xp: 0,
    hearts: maxHearts,
    maxHearts,
    mana: maxMana,
    maxMana,
    inventory: [],
    equipment: {},
    spells: [],
    skills: [],
    unlockedSpells: [],
    unlockedSkills: [],
    currentNode: 'intro',
    element: classData.elementalRequirements[0] || 'Neutral'
  };

  return player;
};

export const addClassToPlayer = (player: Player, className: string, classData: ClassDefinition): Player => {
  const newClass: PlayerClass = {
    name: className,
    level: 1,
    unlockedAt: player.level,
    tier: classData.tier
  };
  
  const newStats = { ...player.stats };
  Object.keys(classData.baseStats).forEach(key => {
    if (key in newStats) {
      newStats[key as keyof PlayerStats] += classData.baseStats[key as keyof PlayerStats] || 0;
    }
  });
  
  const newMaxHearts = Math.max(1, newStats.vitality * 2);
  const newMaxMana = Math.max(1, newStats.magic * 3);
  
  return {
    ...player,
    classes: [...player.classes, newClass],
    stats: newStats,
    maxHearts: newMaxHearts,
    maxMana: newMaxMana,
    hearts: Math.min(player.hearts, newMaxHearts),
    mana: Math.min(player.mana, newMaxMana)
  };
};