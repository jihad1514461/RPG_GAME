-- Create Shops table
CREATE TABLE IF NOT EXISTS shops (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  categories JSON NOT NULL,
  items JSON NOT NULL,
  buy_multiplier DECIMAL(3,2) NOT NULL DEFAULT 1.00,
  sell_multiplier DECIMAL(3,2) NOT NULL DEFAULT 0.50
);