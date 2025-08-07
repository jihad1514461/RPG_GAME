import { Player, ClassDefinition, PlayerStats } from '../../types/game';

export const canUnlockClass = (player: Player, className: string, classRequirements: any, classData: ClassDefinition): boolean => {
  const requirement = classRequirements[className];
  if (!requirement) return false;
  
  // Check if player already has this class
  if (player.classes.some(c => c.name === className)) return false;
  
  // Check if player has reached required level (every 20 levels for class changes)
  if (player.level < requirement.requiredLevel) return false;
  
  // Check stat requirements
  for (const [stat, required] of Object.entries(requirement.requiredStats)) {
    if (player.stats[stat as keyof PlayerStats] < (required as number)) return false;
  }
  
  // Check elemental requirements
  if (classData.elementalRequirements && classData.elementalRequirements.length > 0) {
    // For now, we'll allow any class if the player meets other requirements
    // In the future, this could check player's elemental affinity
  }
  
  return true;
};