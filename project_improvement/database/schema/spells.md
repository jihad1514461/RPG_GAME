# Spells Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | VARCHAR(50) | PRIMARY KEY | Unique identifier for the spell |
| name | VARCHAR(100) | NOT NULL | Display name of the spell |
| type | VARCHAR(20) | NOT NULL | Type of spell (Attack, Defend, Heal) |
| description | TEXT | NOT NULL | Description of the spell |
| mana_cost | INT | NOT NULL | Mana cost to cast the spell |
| power | INT | NOT NULL | Power/effectiveness of the spell |
| element | VARCHAR(20) | NULL | Elemental property of the spell |
| requirements | JSON | NOT NULL | Requirements to learn/use the spell |
| unlock_conditions | JSON | NULL | Conditions to unlock the spell |

## JSON Structure Examples

### requirements
```json
{
  "level": 1,
  "stats": {
    "magic": 2,
    "intelligence": 1
  },
  "classes": ["mage", "archmage"]
}
```

### unlock_conditions
```json
{
  "defeatedMonsters": ["dark_lord"],
  "completedNodes": ["ancient_tower"]
}