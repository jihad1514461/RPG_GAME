-- Insert sample data into Items table
USE rpg_game;

INSERT INTO items (id, name, type, sub_type, description, effects, value, sell_value, rarity, element) VALUES
('iron_sword', 'Iron Sword', 'weapon', 'main_weapon', 
  'A sturdy iron blade that increases your combat prowess', 
  '{"strength": 2}', 100, 50, 'common', 'Neutral'),

('fire_staff', 'Fire Staff', 'weapon', 'main_weapon', 
  'A mystical staff that channels fire magic', 
  '{"magic": 2, "intelligence": 1}', 120, 60, 'common', 'Fire'),

('scholar_robes', 'Scholar\'s Robes', 'armor', 'body', 
  'Robes worn by learned scholars, enhancing mental capabilities', 
  '{"intelligence": 2, "magic": 1}', 80, 40, 'common', 'Neutral'),

('health_potion', 'Health Potion', 'consumable', 'potion', 
  'Restores 3 hearts when consumed', 
  '{"hearts": 3}', 50, 25, 'common', NULL),

('mana_potion', 'Mana Potion', 'consumable', 'potion', 
  'Restores mana based on your magic stat', 
  '{"mana": 5}', 60, 30, 'common', NULL),

('gold_ring', 'Golden Ring', 'accessory', 'ring', 
  'A valuable ring that increases your wealth and reputation', 
  '{"gold": 25, "reputation": 1}', 200, 100, 'uncommon', NULL);