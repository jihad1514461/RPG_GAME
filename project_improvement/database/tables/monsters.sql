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