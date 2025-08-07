-- Insert sample data into Spells table
USE rpg_game;

INSERT INTO spells (id, name, type, description, mana_cost, power, element, requirements) VALUES
('fireball', 'Fireball', 'Attack', 
  'Launches a ball of fire at the enemy', 3, 15, 'Fire',
  '{"level": 1, "stats": {"magic": 2, "intelligence": 1}, "classes": ["mage", "archmage"]}'),

('heal', 'Heal', 'Heal', 
  'Restores health to the caster', 2, 10, 'Light',
  '{"level": 1, "stats": {"magic": 1, "intelligence": 1}}'),

('magic_missile', 'Magic Missile', 'Attack', 
  'A reliable magical projectile that never misses', 2, 8, 'Neutral',
  '{"level": 1, "stats": {"magic": 1, "intelligence": 2}}'),

('shield', 'Magical Shield', 'Defend', 
  'Creates a protective barrier that reduces incoming damage', 3, 12, 'Neutral',
  '{"level": 3, "stats": {"magic": 2, "intelligence": 2}}');