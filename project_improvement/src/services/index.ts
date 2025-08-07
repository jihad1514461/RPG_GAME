export * from './playerService';
export * from './dataService';
export * from './gameStateService';

// Explicitly export to resolve ambiguity
export { updatePlayer as updatePlayerData } from './dataService';
export { updatePlayer as updatePlayerState } from './playerService';