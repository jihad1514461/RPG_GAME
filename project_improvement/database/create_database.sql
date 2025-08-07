-- Create RPG Game Database
CREATE DATABASE IF NOT EXISTS rpg_game;

-- Use the database
USE rpg_game;

-- Create Classes table
CREATE TABLE IF NOT EXISTS classes (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  tier INT NOT NULL DEFAULT 0,
  base_stats JSON NOT NULL,
  elemental_requirements JSON NOT NULL,
  required_elements JSON NULL,
  reputation INT NOT NULL DEFAULT 0,
  gold INT NOT NULL DEFAULT 0,
  description TEXT NOT NULL,
  max_level INT NOT NULL DEFAULT 20,
  can_change_to JSON NULL
);

-- Create Items table
CREATE TABLE IF NOT EXISTS items (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  sub_type VARCHAR(50) NULL,
  description TEXT NOT NULL,
  effects JSON NULL,
  requirements JSON NULL,
  value INT NOT NULL DEFAULT 0,
  sell_value INT NULL,
  stackable BOOLEAN NULL,
  quantity INT NULL,
  rarity VARCHAR(20) NULL,
  element VARCHAR(20) NULL,
  drop_chance DECIMAL(5,4) NULL
);

-- Create Players table
CREATE TABLE IF NOT EXISTS players (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  gender VARCHAR(20) NOT NULL,
  race VARCHAR(50) NOT NULL,
  classes JSON NOT NULL,
  active_class VARCHAR(50) NOT NULL,
  stats JSON NOT NULL,
  level INT NOT NULL DEFAULT 1,
  xp INT NOT NULL DEFAULT 0,
  hearts INT NOT NULL DEFAULT 10,
  max_hearts INT NOT NULL DEFAULT 10,
  mana INT NOT NULL DEFAULT 10,
  max_mana INT NOT NULL DEFAULT 10,
  inventory JSON NOT NULL,
  equipment JSON NOT NULL,
  spells JSON NOT NULL,
  skills JSON NOT NULL,
  unlocked_spells JSON NOT NULL,
  unlocked_skills JSON NOT NULL,
  companions JSON NULL,
  fame INT NULL,
  current_node VARCHAR(100) NOT NULL,
  element VARCHAR(20) NOT NULL
);

-- Create Monsters table
CREATE TABLE IF NOT EXISTS monsters (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  stats JSON NOT NULL,
  element VARCHAR(20) NOT NULL,
  spells JSON NOT NULL,
  ai JSON NOT NULL,
  drop_table JSON NOT NULL,
  class_rewards JSON NOT NULL,
  spell_unlocks JSON NOT NULL
);

-- Create Spells table
CREATE TABLE IF NOT EXISTS spells (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(20) NOT NULL,
  description TEXT NOT NULL,
  mana_cost INT NOT NULL,
  power INT NOT NULL,
  element VARCHAR(20) NULL,
  requirements JSON NOT NULL,
  unlock_conditions JSON NULL
);

-- Create Skills table
CREATE TABLE IF NOT EXISTS skills (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  type VARCHAR(20) NOT NULL,
  effects JSON NOT NULL,
  requirements JSON NOT NULL
);

-- Create Races table
CREATE TABLE IF NOT EXISTS races (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  bonuses JSON NOT NULL,
  calculated_stats JSON NULL
);

-- Create Shops table
CREATE TABLE IF NOT EXISTS shops (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  categories JSON NOT NULL,
  items JSON NOT NULL,
  buy_multiplier DECIMAL(3,2) NOT NULL DEFAULT 1.00,
  sell_multiplier DECIMAL(3,2) NOT NULL DEFAULT 0.50
);

-- Create Villains table
CREATE TABLE IF NOT EXISTS villains (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  backstory TEXT NOT NULL,
  stats JSON NOT NULL,
  element VARCHAR(20) NOT NULL,
  spells JSON NOT NULL,
  weaknesses JSON NOT NULL,
  immunities JSON NOT NULL,
  ai JSON NOT NULL,
  drop_table JSON NOT NULL,
  class_rewards JSON NOT NULL,
  spell_unlocks JSON NOT NULL
);

-- Create Stories table
CREATE TABLE IF NOT EXISTS stories (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  nodes JSON NOT NULL
);