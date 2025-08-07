-- Insert sample data into Shops table
USE rpg_game;

INSERT INTO shops (id, name, categories, items, buy_multiplier, sell_multiplier) VALUES
('town_general', 'General Store', 
  '["weapons", "armor", "potions"]',
  '[{"id": "health_potion", "name": "Health Potion", "type": "consumable", "subType": "potion", "description": "Restores 3 hearts when consumed", "effects": {"hearts": 3}, "value": 50, "sellValue": 25, "stackable": true, "quantity": 1, "rarity": "common", "stock": 10, "category": "potions"}, {"id": "mana_potion", "name": "Mana Potion", "type": "consumable", "subType": "potion", "description": "Restores mana based on your magic stat", "effects": {"mana": 5}, "value": 60, "sellValue": 30, "stackable": true, "quantity": 1, "rarity": "common", "stock": 8, "category": "potions"}]',
  1.00, 0.50),

('magic_emporium', 'Magic Emporium', 
  '["weapons", "armor", "accessories"]',
  '[{"id": "fire_staff", "name": "Fire Staff", "type": "weapon", "subType": "main_weapon", "description": "A mystical staff that channels fire magic", "effects": {"magic": 2, "intelligence": 1}, "value": 120, "sellValue": 60, "rarity": "common", "element": "Fire", "stock": 3, "category": "weapons"}, {"id": "scholar_robes", "name": "Scholar\'s Robes", "type": "armor", "subType": "body", "description": "Robes worn by learned scholars", "effects": {"intelligence": 2, "magic": 1}, "value": 80, "sellValue": 40, "rarity": "common", "stock": 5, "category": "armor"}]',
  1.20, 0.60);