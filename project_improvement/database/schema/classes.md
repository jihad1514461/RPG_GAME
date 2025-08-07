# Classes Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | VARCHAR(50) | PRIMARY KEY | Unique identifier for the class |
| name | VARCHAR(100) | NOT NULL | Display name of the class |
| tier | INT | NOT NULL DEFAULT 0 | Class tier (0 = base, 1 = advanced, etc.) |
| base_stats | JSON | NOT NULL | Base stats for the class (strength, magic, vitality, intelligence,luck,charm, reputation, gold) |
| elemental_requirements | JSON | NOT NULL | Array of required elements to use this class |
| required_elements | JSON | NULL | Additional elements required for advancement |
| reputation | INT | NOT NULL DEFAULT 0 | Required reputation to use this class |
| gold | INT | NOT NULL DEFAULT 0 | Required gold to use this class |
| description | TEXT | NOT NULL | Description of the class |
| max_level | INT | NOT NULL DEFAULT 20 | Maximum level for this class |
| can_change_to | JSON | NULL | Array of class IDs this class can advance to |

## JSON Structure Examples

### base_stats
```json
{
  "strength": 3,
  "magic": 0,
  "vitality": 2,
  "luck":1,
  "charm":1,
  "intelligence": 1,
  "reputation": 1,
  "gold": 50
}
```

### elemental_requirements
```json
["Neutral"]
```

### can_change_to
```json
["knight", "barbarian"]