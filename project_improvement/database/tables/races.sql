-- Create Races table
CREATE TABLE IF NOT EXISTS races (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  bonuses JSON NOT NULL,
  calculated_stats JSON NULL
);