# Races Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | VARCHAR(50) | PRIMARY KEY | Unique identifier for the race |
| name | VARCHAR(100) | NOT NULL | Display name of the race |
| description | TEXT | NOT NULL | Description of the race |
| bonuses | JSON | NOT NULL | Stat bonuses for the race |
| calculated_stats | JSON | NULL | Pre-calculated stats based on bonuses |

## JSON Structure Examples

### bonuses
```json
{
  "strength": 1,
  "intelligence": 1,
  "magic": 1,
  "vitality": 1,
  "luck": 1,
  "charm": 1,
  "reputation": 1,
  "gold": 25
}
```

### calculated_stats
```json
{
  "health": 10,
  "mana": 10,
  "physicalDamage": 1,
  "magicalDamage": 1
}