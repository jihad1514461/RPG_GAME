import { Player, Item, Equipment, PlayerStats } from '../../types/game';

export const canEquipItem = (player: Player, item: Item): boolean => {
  if (!item.subType) return false;
  
  // Check stat requirements
  if (item.requirements) {
    for (const [stat, requirement] of Object.entries(item.requirements)) {
      if (player.stats[stat as keyof PlayerStats] < (requirement as number)) {
        return false;
      }
    }
  }
  
  return true;
};

export const equipItem = (player: Player, item: Item): Player => {
  if (!canEquipItem(player, item) || !item.subType) return player;
  
  const newEquipment = { ...player.equipment };
  const newInventory = [...player.inventory];
  
  // Handle ring slots specially
  if (item.subType === 'ring') {
    if (!newEquipment.ring1) {
      newEquipment.ring1 = item;
    } else if (!newEquipment.ring2) {
      newEquipment.ring2 = item;
    } else {
      // Replace ring1, move old ring1 to inventory
      newInventory.push(newEquipment.ring1);
      newEquipment.ring1 = item;
    }
  } else {
    const slot = item.subType as keyof Equipment;
    
    // If slot is occupied, move old item to inventory
    if (newEquipment[slot]) {
      newInventory.push(newEquipment[slot]!);
    }
    
    newEquipment[slot] = item;
  }
  
  // Remove item from inventory
  const itemIndex = newInventory.findIndex(i => i.id === item.id);
  if (itemIndex !== -1) {
    newInventory.splice(itemIndex, 1);
  }
  
  return {
    ...player,
    equipment: newEquipment,
    inventory: newInventory
  };
};

export const unequipItem = (player: Player, slot: keyof Equipment): Player => {
  const item = player.equipment[slot];
  if (!item) return player;
  
  const newEquipment = { ...player.equipment };
  const newInventory = [...player.inventory, item];
  
  delete newEquipment[slot];
  
  return {
    ...player,
    equipment: newEquipment,
    inventory: newInventory
  };
};