// Utility functions for screen components

export const getScreenTitle = (screen: string): string => {
  const titles: { [key: string]: string } = {
    'start': 'Welcome to the RPG Game',
    'player-creation': 'Create Your Character',
    'story-selection': 'Choose Your Adventure',
    'gameplay': 'Gameplay',
    'combat': 'Combat',
    'level-up': 'Level Up',
    'spell-skill-choice': 'Choose a Spell or Skill',
    'class-selection': 'Select Your Class',
    'inventory': 'Inventory',
    'equipment': 'Equipment',
    'shop': 'Shop',
    'admin-entry': 'Admin Panel',
    'admin-auth': 'Admin Authentication',
    'admin-classes': 'Manage Classes',
    'admin-races': 'Manage Races',
    'admin-items': 'Manage Items',
    'admin-shops': 'Manage Shops',
    'admin-spells': 'Manage Spells',
    'admin-skills': 'Manage Skills',
    'admin-monsters': 'Manage Monsters',
    'admin-villains': 'Manage Villains',
    'admin-stories': 'Manage Stories'
  };
  
  return titles[screen] || 'Unknown Screen';
};

export const getScreenDescription = (screen: string): string => {
  const descriptions: { [key: string]: string } = {
    'start': 'Welcome to the game! Choose an option to begin.',
    'player-creation': 'Create your character by selecting your name, gender, race, and starting class.',
    'story-selection': 'Choose which adventure you want to embark on.',
    'gameplay': 'Explore the world and make choices that affect your story.',
    'combat': 'Engage in turn-based combat with enemies.',
    'level-up': 'Congratulations! You\'ve leveled up. Choose how to improve your character.',
    'spell-skill-choice': 'Choose a new spell or skill to learn.',
    'class-selection': 'Select a new class to advance your character.',
    'inventory': 'Manage your items and equipment.',
    'equipment': 'Equip or unequip items to modify your stats.',
    'shop': 'Buy and sell items with the shopkeeper.',
    'admin-entry': 'Access the administrative panel to manage game data.',
    'admin-auth': 'Authenticate to access the administrative panel.',
    'admin-classes': 'Create, edit, or delete character classes.',
    'admin-races': 'Create, edit, or delete character races.',
    'admin-items': 'Create, edit, or delete items.',
    'admin-shops': 'Create, edit, or delete shops and their inventories.',
    'admin-spells': 'Create, edit, or delete spells.',
    'admin-skills': 'Create, edit, or delete skills.',
    'admin-monsters': 'Create, edit, or delete monsters.',
    'admin-villains': 'Create, edit, or delete villains.',
    'admin-stories': 'Create, edit, or delete story nodes and choices.'
  };
  
  return descriptions[screen] || 'No description available.';
};