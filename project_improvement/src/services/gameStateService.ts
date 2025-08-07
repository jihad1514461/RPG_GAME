import { Player } from '../types/game';
import { loadPlayer, savePlayer, updatePlayer } from './playerService';
import { 
  getData, 
  getAllClasses,
  getClassById,
  getAllItems,
  getItemById,
  getAllMonsters,
  getMonsterById,
  getAllSpells,
  getSpellById,
  getAllSkills,
  getSkillById,
  getAllRaces,
  getRaceById,
  getAllShops,
  getShopById,
  getAllVillains,
  getVillainById,
  getAllStories,
  getStoryById
} from './dataService';
import { updatePlayerData } from './index';

// Game state interface
export interface GameState {
  player: Player;
  currentScreen: string;
  gameData: {
    classes: { [key: string]: any };
    items: { [key: string]: any };
    monsters: { [key: string]: any };
    spells: { [key: string]: any };
    skills: { [key: string]: any };
    races: { [key: string]: any };
    shops: { [key: string]: any };
    villains: { [key: string]: any };
    stories: { [key: string]: any };
  };
}

// Initialize game state
export const initializeGameState = (): GameState => {
  const player = loadPlayer();
  
  return {
    player,
    currentScreen: 'start',
    gameData: {
      classes: getAllClasses(),
      items: getAllItems(),
      monsters: getAllMonsters(),
      spells: getAllSpells(),
      skills: getAllSkills(),
      races: getAllRaces(),
      shops: getAllShops(),
      villains: getAllVillains(),
      stories: getAllStories()
    }
  };
};

// Update game state
export const updateGameState = (state: GameState, updates: Partial<GameState>): GameState => {
  return { ...state, ...updates };
};

// Update player in game state
export const updatePlayerInGameState = (state: GameState, updates: Partial<Player>): GameState => {
  const updatedPlayer = updatePlayer(state.player, updates);
  return { ...state, player: updatedPlayer };
};

// Change screen
export const changeScreen = (state: GameState, screen: string): GameState => {
  return { ...state, currentScreen: screen };
};

// Save game state
export const saveGameState = (state: GameState): void => {
  savePlayer(state.player);
  updatePlayerData(state.player);
};

// Get data by ID from game state
export const getDataByIdFromState = (state: GameState, dataType: string, id: string): any | undefined => {
  if (dataType in state.gameData) {
    return state.gameData[dataType as keyof typeof state.gameData][id];
  }
  return undefined;
};

// Get all data of a type from game state
export const getAllDataFromState = (state: GameState, dataType: string): any | undefined => {
  if (dataType in state.gameData) {
    return state.gameData[dataType as keyof typeof state.gameData];
  }
  return undefined;
};