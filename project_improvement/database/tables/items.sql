-- Create Items table
CREATE TABLE IF NOT EXISTS items (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  sub_type VARCHAR(50) NULL,
  description TEXT NOT NULL,
  effects JSON NULL,
  requirements JSON NULL,
  value INT NOT NULL DEFAULT 0,
  sell_value INT NULL,
  stackable BOOLEAN NULL,
  quantity INT NULL,
  rarity VARCHAR(20) NULL,
  element VARCHAR(20) NULL,
  drop_chance DECIMAL(5,4) NULL
);