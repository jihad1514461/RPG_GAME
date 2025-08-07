-- Create Stories table
CREATE TABLE IF NOT EXISTS stories (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  nodes JSON NOT NULL
);