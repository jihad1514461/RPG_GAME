// Utility functions for views

export const renderStartView = (onStart: () => void, onAdmin: () => void): string => {
  return `
<div class="start-view">
  <h1>Welcome to the RPG Game</h1>
  <p>Welcome to the game! Choose an option to begin.</p>
  <button onclick="onStart()">Start Game</button>
  <button onclick="onAdmin()">Admin Panel</button>
</div>
  `;
};

export const renderPlayerCreationView = (onCreate: (name: string, gender: string, race: string, classType: string) => void): string => {
  return `
<div class="player-creation-view">
  <h1>Create Your Character</h1>
  <p>Create your character by selecting your name, gender, race, and starting class.</p>
  <form>
    <label>Name: <input type="text" id="player-name" /></label>
    <label>Gender: 
      <select id="player-gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </label>
    <label>Race: <input type="text" id="player-race" /></label>
    <label>Class: <input type="text" id="player-class" /></label>
    <button type="button" onclick="onCreate()">Create Character</button>
  </form>
</div>
  `;
};

export const renderGameplayView = (onChoice: (choice: string) => void): string => {
  return `
<div class="gameplay-view">
  <h1>Gameplay</h1>
  <p>Explore the world and make choices that affect your story.</p>
  <div class="choices">
    <button onclick="onChoice('explore')">Explore</button>
    <button onclick="onChoice('rest')">Rest</button>
    <button onclick="onChoice('inventory')">Inventory</button>
  </div>
</div>
  `;
};