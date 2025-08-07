-- Insert sample data into Monsters table
USE rpg_game;

INSERT INTO monsters (id, name, description, stats, element, spells, ai, drop_table, class_rewards, spell_unlocks) VALUES
('goblin', 'Goblin', 
  'A small, green-skinned creature with sharp claws and cunning eyes',
  '{"health": 25, "attack": 8, "defense": 3, "mana": 5}',
  'Earth', '["claw_attack"]',
  '{"threatThreshold": 30, "elementalPreference": true, "resourceThreshold": 20}',
  '{"items": [{"itemId": "health_potion", "chance": 0.3, "quantity": 1}, {"itemId": "gold_coins", "chance": 0.6, "quantity": 15}], "equipment": [{"itemId": "iron_sword", "chance": 0.1}]}',
  '[{"className": "warrior", "bonusXP": 10, "bonusReputation": 1}, {"className": "all", "bonusXP": 5}]',
  '[]'),

('orc_warrior', 'Orc Warrior', 
  'A brutish orc wielding crude weapons but possessing great strength',
  '{"health": 45, "attack": 15, "defense": 8, "mana": 10}',
  'Fire', '["rage_strike"]',
  '{"threatThreshold": 40, "elementalPreference": true, "resourceThreshold": 25}',
  '{"items": [{"itemId": "health_potion", "chance": 0.4, "quantity": 2}, {"itemId": "gold_coins", "chance": 0.7, "quantity": 25}], "equipment": [{"itemId": "iron_sword", "chance": 0.2}]}',
  '[{"className": "warrior", "bonusXP": 15, "bonusReputation": 1}, {"className": "knight", "bonusXP": 20, "bonusReputation": 2}, {"className": "all", "bonusXP": 8}]',
  '[]');