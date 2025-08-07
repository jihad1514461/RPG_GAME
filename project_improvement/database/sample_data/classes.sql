-- Insert sample data into Classes table
USE rpg_game;

INSERT INTO classes (id, name, tier, base_stats, elemental_requirements, reputation, gold, description, max_level, can_change_to) VALUES
('warrior', 'Warrior', 0, 
  '{"strength": 3, "magic": 0, "vitality": 2, "intelligence": 1, "reputation": 1, "gold": 50}', 
  '["Neutral"]', 1, 50, 
  'A brave fighter skilled in melee combat and physical prowess', 20, 
  '["knight", "barbarian"]'),

('mage', 'Mage', 0, 
  '{"strength": 0, "magic": 3, "vitality": 1, "intelligence": 3, "reputation": 1, "gold": 100}', 
  '["Fire", "Water", "Air"]', 1, 100, 
  'A scholar of arcane magic and elemental forces', 20, 
  '["archmage", "elementalist"]'),

('rogue', 'Rogue', 0, 
  '{"strength": 1, "magic": 1, "vitality": 1, "intelligence": 2, "reputation": 0, "gold": 75}', 
  '["Dark", "Neutral"]', 0, 75, 
  'A stealthy character who relies on cunning and agility', 20, 
  '["assassin", "shadowdancer"]'),

('cleric', 'Cleric', 0, 
  '{"strength": 1, "magic": 2, "vitality": 2, "intelligence": 2, "reputation": 2, "gold": 60}', 
  '["Light"]', 2, 60, 
  'A divine healer who channels the power of light', 20, 
  '["paladin", "priest"]'),

('knight', 'Knight', 1, 
  '{"strength": 4, "magic": 0, "vitality": 3, "intelligence": 1, "reputation": 2, "gold": 0}', 
  '["Light"]', 2, 0, 
  'A noble warrior dedicated to honor and protection', 40, 
  NULL),

('archmage', 'Archmage', 1, 
  '{"strength": 0, "magic": 5, "vitality": 1, "intelligence": 4, "reputation": 2, "gold": 0}', 
  '["Fire", "Water", "Air", "Earth"]', 2, 0, 
  'A master of all elemental magics and ancient knowledge', 40, 
  NULL);