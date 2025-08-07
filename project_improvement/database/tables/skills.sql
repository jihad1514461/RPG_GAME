-- Create Skills table
CREATE TABLE IF NOT EXISTS skills (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  type VARCHAR(20) NOT NULL,
  effects JSON NOT NULL,
  requirements JSON NOT NULL
);