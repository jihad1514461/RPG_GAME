import { Player, Choice, Item, PlayerStats } from '../../types/game';
import { hasItem } from '../items/inventory';
import { addItemToInventory } from '../items/inventory';

export const canMakeChoice = (choice: Choice, player: Player, diceRoll?: number): boolean => {
  // Check stat requirements
  if (choice.require) {
    for (const [stat, requirement] of Object.entries(choice.require)) {
      if (player.stats[stat as keyof PlayerStats] < (requirement as number)) {
        return false;
      }
    }
  }

  // Check class requirements
  if (choice.classRequire) {
    const hasRequiredClass = choice.classRequire.some(className => 
      player.classes.some(c => c.name === className)
    );
    if (!hasRequiredClass) return false;
  }

  // Check elemental requirements
  if (choice.elementRequire) {
    if (!choice.elementRequire.includes(player.element)) {
      return false;
    }
  }

  // Check item requirements
  if (choice.itemRequirements) {
    for (const itemId of choice.itemRequirements) {
      if (!hasItem(player, itemId)) {
        return false;
      }
    }
  }

  // Check dice roll requirement
  if (choice.dice_requirement && diceRoll !== undefined) {
    return diceRoll >= choice.dice_requirement;
  }

  return true;
};

export const applyChoiceEffects = (player: Player, choice: Choice, gameItems: { [key: string]: Item }): Player => {
  if (!choice.effects) return player;

  let newPlayer = { ...player };
  let newStats = { ...player.stats };

  // Apply stat effects
  Object.keys(choice.effects).forEach(key => {
    if (key === 'xp') {
      newPlayer.xp += choice.effects!.xp || 0;
    } else if (key === 'hearts') {
      const healthChange = choice.effects!.hearts || 0;
      newPlayer.hearts = Math.max(0, Math.min(newPlayer.maxHearts, newPlayer.hearts + healthChange));
    } else if (key === 'mana') {
      const manaChange = choice.effects!.mana || 0;
      newPlayer.mana = Math.max(0, Math.min(newPlayer.maxMana, newPlayer.mana + manaChange));
    } else if (key in newStats) {
      newStats[key as keyof PlayerStats] += choice.effects![key as keyof PlayerStats] || 0;
    }
  });

  newPlayer.stats = newStats;

  // Recalculate max hearts and mana if vitality or magic changed
  if (choice.effects.vitality) {
    newPlayer.maxHearts = Math.max(1, newStats.vitality * 2);
    newPlayer.hearts = Math.min(newPlayer.hearts, newPlayer.maxHearts);
  }
  if (choice.effects.magic) {
    newPlayer.maxMana = Math.max(1, newStats.magic * 3);
    newPlayer.mana = Math.min(newPlayer.mana, newPlayer.maxMana);
  }

  // Add item rewards
  if (choice.itemRewards) {
    choice.itemRewards.forEach(itemId => {
      const item = gameItems[itemId];
      if (item) {
        newPlayer = addItemToInventory(newPlayer, item);
      }
    });
  }

  // Add spell rewards
  if (choice.spellRewards) {
    choice.spellRewards.forEach(spellId => {
      if (!newPlayer.unlockedSpells.includes(spellId)) {
        newPlayer.unlockedSpells.push(spellId);
      }
    });
  }

  // Add skill rewards
  if (choice.skillRewards) {
    choice.skillRewards.forEach(skillId => {
      if (!newPlayer.unlockedSkills.includes(skillId)) {
        newPlayer.unlockedSkills.push(skillId);
      }
    });
  }

  return newPlayer;
};

export const replaceVariables = (text: string, player: Player): string => {
  const pronouns = {
    male: { he_she: 'he', his_her: 'his', him_her: 'him' },
    female: { he_she: 'she', his_her: 'her', him_her: 'her' },
    other: { he_she: 'they', his_her: 'their', him_her: 'them' }
  };

  const playerPronouns = pronouns[player.gender];

  return text
    .replace(/{player_name}/g, player.name)
    .replace(/{player_race}/g, player.race)
    .replace(/{player_class}/g, player.activeClass)
    .replace(/{he_she}/g, playerPronouns.he_she)
    .replace(/{his_her}/g, playerPronouns.his_her)
    .replace(/{him_her}/g, playerPronouns.him_her)
    .replace(/{strength}/g, player.stats.strength.toString())
    .replace(/{intelligence}/g, player.stats.intelligence.toString())
    .replace(/{magic}/g, player.stats.magic.toString())
    .replace(/{vitality}/g, player.stats.vitality.toString())
    .replace(/{gold}/g, player.stats.gold.toString())
    .replace(/{reputation}/g, player.stats.reputation.toString());
};