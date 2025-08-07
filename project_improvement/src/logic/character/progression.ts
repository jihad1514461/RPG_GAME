import { Player } from '../../types/game';

// Fibonacci XP calculation
export const calculateXPThreshold = (level: number): number => {
  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };
  return fibonacci(level) * 10;
};

export const canLevelUp = (player: Player): boolean => {
  return player.xp >= calculateXPThreshold(player.level);
};

export const levelUpPlayer = (player: Player): Player => {
  const newLevel = player.level + 1;
  const newMaxHearts = Math.max(1, player.stats.vitality * 2);
  const newMaxMana = Math.max(1, player.stats.magic * 3);
  
  return {
    ...player,
    level: newLevel,
    maxHearts: newMaxHearts,
    maxMana: newMaxMana,
    hearts: Math.min(player.hearts + 1, newMaxHearts),
    mana: Math.min(player.mana + 1, newMaxMana)
  };
};

export const shouldShowSpellSkillChoice = (player: Player): boolean => {
  return player.level % 5 === 0 && player.level > 0;
};