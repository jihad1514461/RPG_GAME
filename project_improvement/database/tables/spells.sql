-- Create Spells table
CREATE TABLE IF NOT EXISTS spells (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(20) NOT NULL,
  description TEXT NOT NULL,
  mana_cost INT NOT NULL,
  power INT NOT NULL,
  element VARCHAR(20) NULL,
  requirements JSON NOT NULL,
  unlock_conditions JSON NULL
);