# Villains Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | VARCHAR(50) | PRIMARY KEY | Unique identifier for the villain |
| name | VARCHAR(100) | NOT NULL | Display name of the villain |
| description | TEXT | NOT NULL | Description of the villain |
| backstory | TEXT | NOT NULL | Backstory of the villain |
| stats | JSON | NOT NULL | Villain's stats (health, attack, defense, mana) |
| element | VARCHAR(20) | NOT NULL | Villain's elemental affinity |
| spells | JSON | NOT NULL | Array of spell IDs the villain can use |
| weaknesses | JSON | NOT NULL | Array of elemental weaknesses |
| immunities | JSON | NOT NULL | Array of elemental immunities |
| ai | JSON | NOT NULL | AI behavior settings |
| drop_table | JSON | NOT NULL | Items and equipment that can drop |
| class_rewards | JSON | NOT NULL | XP and reputation rewards for specific classes |
| spell_unlocks | JSON | NOT NULL | Spells unlocked by defeating this villain |

## JSON Structure Examples

### stats
```json
{
  "health": 200,
  "attack": 25,
  "defense": 15,
  "mana": 50
}
```

### spells
```json
["dark_bolt", "shadow_shield", "drain_life"]
```

### weaknesses
```json
["Light"]
```

### immunities
```json
["Dark"]
```

### ai
```json
{
  "threatThreshold": 50,
  "elementalPreference": true,
  "resourceThreshold": 30
}
```

### drop_table
```json
{
  "items": [
    {
      "itemId": "legendary_gem",
      "chance": 1,
      "quantity": 1
    }
  ],
  "equipment": [
    {
      "itemId": "dark_sword",
      "chance": 0.8
    }
  ]
}
```

### class_rewards
```json
[
  {
    "className": "knight",
    "bonusXP": 100,
    "bonusReputation": 10
  },
  {
    "className": "cleric",
    "bonusXP": 120,
    "bonusReputation": 15
  },
  {
    "className": "all",
    "bonusXP": 75,
    "bonusReputation": 5
  }
]
```

### spell_unlocks
```json
["holy_light", "divine_protection"]