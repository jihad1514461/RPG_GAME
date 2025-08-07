-- Insert sample data into Villains table
USE rpg_game;

INSERT INTO villains (id, name, description, backstory, stats, element, spells, weaknesses, immunities, ai, drop_table, class_rewards, spell_unlocks) VALUES
('dark_lord', 'Dark Lord Malachar', 
  'An ancient evil that threatens the realm with dark magic',
  'Once a noble king, corrupted by dark magic and an insatiable thirst for power',
  '{"health": 200, "attack": 25, "defense": 15, "mana": 50}',
  'Dark', '["dark_bolt", "shadow_shield", "drain_life"]',
  '["Light"]', '["Dark"]',
  '{"threatThreshold": 50, "elementalPreference": true, "resourceThreshold": 30}',
  '{"items": [{"itemId": "legendary_gem", "chance": 1, "quantity": 1}, {"itemId": "gold_coins", "chance": 1, "quantity": 500}], "equipment": [{"itemId": "dark_sword", "chance": 0.8}]}',
  '[{"className": "knight", "bonusXP": 100, "bonusReputation": 10}, {"className": "cleric", "bonusXP": 120, "bonusReputation": 15}, {"className": "all", "bonusXP": 75, "bonusReputation": 5}]',
  '["holy_light", "divine_protection"]');