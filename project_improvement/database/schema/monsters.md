# Monsters Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | VARCHAR(50) | PRIMARY KEY | Unique identifier for the monster |
| name | VARCHAR(100) | NOT NULL | Display name of the monster |
| description | TEXT | NOT NULL | Description of the monster |
| stats | JSON | NOT NULL | Monster's stats (health, attack, defense, mana) |
| element | VARCHAR(20) | NOT NULL | Monster's elemental affinity |
| spells | JSON | NOT NULL | Array of spell IDs the monster can use |
| ai | JSON | NOT NULL | AI behavior settings |
| drop_table | JSON | NOT NULL | Items and equipment that can drop |
| class_rewards | JSON | NOT NULL | XP and reputation rewards for specific classes |
| spell_unlocks | JSON | NOT NULL | Spells unlocked by defeating this monster |

## JSON Structure Examples

### stats
```json
{
  "health": 25,
  "attack": 8,
  "defense": 3,
  "mana": 5
}
```

### spells
```json
["claw_attack"]
```

### ai
```json
{
  "threatThreshold": 30,
  "elementalPreference": true,
  "resourceThreshold": 20
}
```

### drop_table
```json
{
  "items": [
    {
      "itemId": "health_potion",
      "chance": 0.3,
      "quantity": 1
    }
  ],
  "equipment": [
    {
      "itemId": "iron_sword",
      "chance": 0.1
    }
  ]
}
```

### class_rewards
```json
[
  {
    "className": "warrior",
    "bonusXP": 10,
    "bonusReputation": 1
  },
  {
    "className": "all",
    "bonusXP": 5
  }
]
```

### spell_unlocks
```json
[]