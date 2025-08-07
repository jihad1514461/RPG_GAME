-- Indexes and Constraints for RPG Game Database
USE rpg_game;

-- Indexes for Classes table
CREATE INDEX idx_classes_tier ON classes(tier);
CREATE INDEX idx_classes_elemental_requirements ON classes((CAST(elemental_requirements AS CHAR(255))));

-- Indexes for Items table
CREATE INDEX idx_items_type ON items(type);
CREATE INDEX idx_items_rarity ON items(rarity);
CREATE INDEX idx_items_element ON items(element);

-- Indexes for Players table
CREATE INDEX idx_players_name ON players(name);
CREATE INDEX idx_players_level ON players(level);
CREATE INDEX idx_players_race ON players(race);
CREATE INDEX idx_players_active_class ON players(active_class);

-- Indexes for Monsters table
CREATE INDEX idx_monsters_element ON monsters(element);
CREATE INDEX idx_monsters_name ON monsters(name);

-- Indexes for Spells table
CREATE INDEX idx_spells_type ON spells(type);
CREATE INDEX idx_spells_element ON spells(element);
CREATE INDEX idx_spells_name ON spells(name);

-- Indexes for Skills table
CREATE INDEX idx_skills_type ON skills(type);
CREATE INDEX idx_skills_name ON skills(name);

-- Indexes for Races table
CREATE INDEX idx_races_name ON races(name);

-- Indexes for Shops table
CREATE INDEX idx_shops_name ON shops(name);

-- Indexes for Villains table
CREATE INDEX idx_villains_element ON villains(element);
CREATE INDEX idx_villains_name ON villains(name);

-- Indexes for Stories table
CREATE INDEX idx_stories_name ON stories(name);

-- Foreign Key Constraints (if needed for relationships)
-- Note: Most relationships are stored as JSON, so traditional FK constraints don't apply
-- However, we can add some constraints for data integrity

-- Constraints for Items table
ALTER TABLE items ADD CONSTRAINT chk_item_type CHECK (type IN ('weapon', 'armor', 'accessory', 'consumable', 'quest'));
ALTER TABLE items ADD CONSTRAINT chk_item_rarity CHECK (rarity IN ('common', 'uncommon', 'rare', 'epic', 'legendary'));
ALTER TABLE items ADD CONSTRAINT chk_item_element CHECK (element IN ('Light', 'Fire', 'Water', 'Earth', 'Air', 'Dark', 'Neutral', NULL));

-- Constraints for Spells table
ALTER TABLE spells ADD CONSTRAINT chk_spell_type CHECK (type IN ('Attack', 'Defend', 'Heal'));
ALTER TABLE spells ADD CONSTRAINT chk_spell_element CHECK (element IN ('Light', 'Fire', 'Water', 'Earth', 'Air', 'Dark', 'Neutral', NULL));

-- Constraints for Skills table
ALTER TABLE skills ADD CONSTRAINT chk_skill_type CHECK (type IN ('passive', 'active'));

-- Constraints for Players table
ALTER TABLE players ADD CONSTRAINT chk_player_gender CHECK (gender IN ('male', 'female', 'other'));

-- Constraints for Monsters table
ALTER TABLE monsters ADD CONSTRAINT chk_monster_element CHECK (element IN ('Light', 'Fire', 'Water', 'Earth', 'Air', 'Dark', 'Neutral'));

-- Constraints for Villains table
ALTER TABLE villains ADD CONSTRAINT chk_villain_element CHECK (element IN ('Light', 'Fire', 'Water', 'Earth', 'Air', 'Dark', 'Neutral'));