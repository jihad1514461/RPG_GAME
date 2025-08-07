-- Insert sample data into Races table
USE rpg_game;

INSERT INTO races (id, name, description, bonuses) VALUES
('Human', 'Human', 
  'Versatile and adaptable, humans are the most common race in the realm',
  '{"strength": 1, "intelligence": 1, "magic": 1, "vitality": 1, "luck": 1, "charm": 1, "reputation": 1, "gold": 25}'),

('Elf', 'Elf', 
  'Graceful and long-lived, elves have a natural affinity for magic',
  '{"strength": 0, "intelligence": 2, "magic": 2, "vitality": 0, "luck": 1, "charm": 2, "reputation": 1, "gold": 50}'),

('Dwarf', 'Dwarf', 
  'Stout and sturdy, dwarves are known for their craftsmanship and resilience',
  '{"strength": 2, "intelligence": 0, "magic": 0, "vitality": 2, "luck": 0, "charm": 0, "reputation": 1, "gold": 75}'),

('Halfling', 'Halfling', 
  'Small and nimble, halflings are known for their luck and charm',
  '{"strength": 0, "intelligence": 1, "magic": 1, "vitality": 1, "luck": 2, "charm": 1, "reputation": 2, "gold": 40}'),

('Orc', 'Orc', 
  'Strong and fierce, orcs value strength and combat prowess',
  '{"strength": 3, "intelligence": 0, "magic": 0, "vitality": 2, "luck": 0, "charm": 0, "reputation": 0, "gold": 30}'),

('High Elf', 'High Elf', 
  'The most powerful of the elven races, with exceptional magical abilities',
  '{"strength": 0, "intelligence": 3, "magic": 3, "vitality": 0, "luck": 1, "charm": 3, "reputation": 2, "gold": 100}');