-- Insert sample data into Skills table
USE rpg_game;

INSERT INTO skills (id, name, description, type, effects, requirements) VALUES
('sword_mastery', 'Sword Mastery', 
  'Increases strength when wielding swords', 'passive',
  '{"strength": 2}',
  '{"level": 5, "stats": {"strength": 3}, "classes": ["warrior", "knight"]}'),

('arcane_knowledge', 'Arcane Knowledge', 
  'Deep understanding of magic increases intelligence and magical power', 'passive',
  '{"intelligence": 2, "magic": 1}',
  '{"level": 5, "stats": {"intelligence": 3, "magic": 2}, "classes": ["mage", "archmage"]}'),

('noble_presence', 'Noble Presence', 
  'Your reputation and wealth grow through noble bearing', 'passive',
  '{"reputation": 2, "gold": 50}',
  '{"level": 10, "stats": {"reputation": 3}}'),

('vitality_boost', 'Vitality Boost', 
  'Increases your vitality and maximum health', 'passive',
  '{"vitality": 1, "maxHearts": 2}',
  '{"level": 8, "stats": {"vitality": 4}}');