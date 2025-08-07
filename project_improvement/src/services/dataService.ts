// Generic data service for CRUD operations on JSON files
// Note: In a real implementation, this would use a backend API or file system operations
// For this project, we'll simulate CRUD operations with in-memory data

// Import all JSON data
import classes from '../data/config/classes.json';
import classRequirements from '../data/config/classRequirements.json';
import items from '../data/config/items.json';
import monsters from '../data/config/monsters.json';
import player from '../data/config/player.json';
import races from '../data/config/races.json';
import shops from '../data/config/shops.json';
import skills from '../data/config/skills.json';
import spells from '../data/config/spells.json';
import stories from '../data/config/stories.json';
import villains from '../data/config/villains.json';

// In-memory data store
const dataStore: { [key: string]: any } = {
  classes: { ...classes },
  classRequirements: { ...classRequirements },
  items: { ...items },
  monsters: { ...monsters },
  player: { ...player },
  races: { ...races },
  shops: { ...shops },
  skills: { ...skills },
  spells: { ...spells },
  stories: { ...stories },
  villains: { ...villains }
};

// Generic CRUD operations
export const getData = <T>(dataType: string): T => {
  return dataStore[dataType] as T;
};

export const getDataById = <T>(dataType: string, id: string): T | undefined => {
  const data = dataStore[dataType];
  return data && data[id] ? data[id] : undefined;
};

export const createData = <T>(dataType: string, id: string, data: T): boolean => {
  if (!dataStore[dataType]) {
    dataStore[dataType] = {};
  }
  
  if (dataStore[dataType][id]) {
    return false; // Data already exists
  }
  
  dataStore[dataType][id] = data;
  return true;
};

export const updateData = <T>(dataType: string, id: string, data: T): boolean => {
  if (!dataStore[dataType] || !dataStore[dataType][id]) {
    return false; // Data doesn't exist
  }
  
  dataStore[dataType][id] = { ...dataStore[dataType][id], ...data };
  return true;
};

export const deleteData = (dataType: string, id: string): boolean => {
  if (!dataStore[dataType] || !dataStore[dataType][id]) {
    return false; // Data doesn't exist
  }
  
  delete dataStore[dataType][id];
  return true;
};

// Specialized functions for specific data types
export const getAllClasses = () => getData<{ [key: string]: any }>('classes');
export const getClassById = (id: string) => getDataById<any>('classes', id);
export const createClass = (id: string, data: any) => createData('classes', id, data);
export const updateClass = (id: string, data: any) => updateData('classes', id, data);
export const deleteClass = (id: string) => deleteData('classes', id);

export const getAllItems = () => getData<{ [key: string]: any }>('items');
export const getItemById = (id: string) => getDataById<any>('items', id);
export const createItem = (id: string, data: any) => createData('items', id, data);
export const updateItem = (id: string, data: any) => updateData('items', id, data);
export const deleteItem = (id: string) => deleteData('items', id);

export const getAllMonsters = () => getData<{ [key: string]: any }>('monsters');
export const getMonsterById = (id: string) => getDataById<any>('monsters', id);
export const createMonster = (id: string, data: any) => createData('monsters', id, data);
export const updateMonster = (id: string, data: any) => updateData('monsters', id, data);
export const deleteMonster = (id: string) => deleteData('monsters', id);

export const getAllSpells = () => getData<{ [key: string]: any }>('spells');
export const getSpellById = (id: string) => getDataById<any>('spells', id);
export const createSpell = (id: string, data: any) => createData('spells', id, data);
export const updateSpell = (id: string, data: any) => updateData('spells', id, data);
export const deleteSpell = (id: string) => deleteData('spells', id);

export const getAllSkills = () => getData<{ [key: string]: any }>('skills');
export const getSkillById = (id: string) => getDataById<any>('skills', id);
export const createSkill = (id: string, data: any) => createData('skills', id, data);
export const updateSkill = (id: string, data: any) => updateData('skills', id, data);
export const deleteSkill = (id: string) => deleteData('skills', id);

export const getAllRaces = () => getData<{ [key: string]: any }>('races');
export const getRaceById = (id: string) => getDataById<any>('races', id);
export const createRace = (id: string, data: any) => createData('races', id, data);
export const updateRace = (id: string, data: any) => updateData('races', id, data);
export const deleteRace = (id: string) => deleteData('races', id);

export const getAllShops = () => getData<{ [key: string]: any }>('shops');
export const getShopById = (id: string) => getDataById<any>('shops', id);
export const createShop = (id: string, data: any) => createData('shops', id, data);
export const updateShop = (id: string, data: any) => updateData('shops', id, data);
export const deleteShop = (id: string) => deleteData('shops', id);

export const getAllVillains = () => getData<{ [key: string]: any }>('villains');
export const getVillainById = (id: string) => getDataById<any>('villains', id);
export const createVillain = (id: string, data: any) => createData('villains', id, data);
export const updateVillain = (id: string, data: any) => updateData('villains', id, data);
export const deleteVillain = (id: string) => deleteData('villains', id);

export const getAllStories = () => getData<{ [key: string]: any }>('stories');
export const getStoryById = (id: string) => getDataById<any>('stories', id);
export const createStory = (id: string, data: any) => createData('stories', id, data);
export const updateStory = (id: string, data: any) => updateData('stories', id, data);
export const deleteStory = (id: string) => deleteData('stories', id);

export const getPlayer = () => getData<any>('player');
export const updatePlayer = (data: any) => updateData('player', 'player', data);