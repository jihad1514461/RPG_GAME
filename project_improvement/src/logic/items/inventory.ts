import { Player, Item } from '../../types/game';

export const addItemToInventory = (player: Player, item: Item): Player => {
  const newInventory = [...player.inventory];
  
  if (item.stackable) {
    const existingItem = newInventory.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + (item.quantity || 1);
    } else {
      newInventory.push({ ...item });
    }
  } else {
    newInventory.push({ ...item });
  }
  
  return { ...player, inventory: newInventory };
};

export const removeItemFromInventory = (player: Player, itemId: string, quantity: number = 1): Player => {
  const newInventory = [...player.inventory];
  const itemIndex = newInventory.findIndex(i => i.id === itemId);
  
  if (itemIndex === -1) return player;
  
  const item = newInventory[itemIndex];
  if (item.stackable && item.quantity && item.quantity > quantity) {
    item.quantity -= quantity;
  } else {
    newInventory.splice(itemIndex, 1);
  }
  
  return { ...player, inventory: newInventory };
};

export const hasItem = (player: Player, itemId: string): boolean => {
  return player.inventory.some(item => item.id === itemId);
};