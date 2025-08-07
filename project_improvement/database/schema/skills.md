# Skills Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | VARCHAR(50) | PRIMARY KEY | Unique identifier for the skill |
| name | VARCHAR(100) | NOT NULL | Display name of the skill |
| description | TEXT | NOT NULL | Description of the skill |
| type | VARCHAR(20) | NOT NULL | Type of skill (passive, active) |
| effects | JSON | NOT NULL | Effects of the skill on player stats |
| requirements | JSON | NOT NULL | Requirements to learn/use the skill |

## JSON Structure Examples

### effects
```json
{
  "strength": 2,
  "intelligence": 1,
  "maxHearts": 2
}
```

### requirements
```json
{
  "level": 5,
  "stats": {
    "strength": 3
  },
  "classes": ["warrior", "knight"]
}