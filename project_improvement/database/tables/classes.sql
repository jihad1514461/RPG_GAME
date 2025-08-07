-- Create Classes table
CREATE TABLE IF NOT EXISTS classes (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  tier INT NOT NULL DEFAULT 0,
  base_stats JSON NOT NULL,
  elemental_requirements JSON NOT NULL,
  required_elements JSON NULL,
  reputation INT NOT NULL DEFAULT 0,
  gold INT NOT NULL DEFAULT 0,
  description TEXT NOT NULL,
  max_level INT NOT NULL DEFAULT 20,
  can_change_to JSON NULL
);