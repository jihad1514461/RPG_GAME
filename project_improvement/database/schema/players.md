# Players Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | INT | PRIMARY KEY AUTO_INCREMENT | Unique identifier for the player |
| name | VARCHAR(100) | NOT NULL | Player's character name |
| gender | VARCHAR(20) | NOT NULL | Player's gender (male, female, other) |
| race | VARCHAR(50) | NOT NULL | Player's race |
| classes | JSON | NOT NULL | Array of player's classes with levels |
| active_class | VARCHAR(50) | NOT NULL | Currently active class |
| stats | JSON | NOT NULL | Current player stats |
| level | INT | NOT NULL DEFAULT 1 | Current level |
| xp | INT | NOT NULL DEFAULT 0 | Current experience points |
| hearts | INT | NOT NULL DEFAULT 10 | Current hearts (health) |
| max_hearts | INT | NOT NULL DEFAULT 10 | Maximum hearts |
| mana | INT | NOT NULL DEFAULT 10 | Current mana |
| max_mana | INT | NOT NULL DEFAULT 10 | Maximum mana |
| inventory | JSON | NOT NULL | Player's inventory items |
| equipment | JSON | NOT NULL | Player's equipped items |
| spells | JSON | NOT NULL | Player's known spells |
| skills | JSON | NOT NULL | Player's known skills |
| unlocked_spells | JSON | NOT NULL | Player's unlocked spells |
| unlocked_skills | JSON | NOT NULL | Player's unlocked skills |
| companions | JSON | NULL | Player's companions |
| fame | INT | NULL | Player's fame/reputation |
| current_node | VARCHAR(100) | NOT NULL | Current story node |
| element | VARCHAR(20) | NOT NULL | Player's elemental affinity |

## JSON Structure Examples

### classes
```json
[
  {
    "name": "warrior",
    "level": 1,
    "unlockedAt": 1,
    "tier": 0
  }
]
```

### stats
```json
{
  "strength": 3,
  "magic": 0,
  "vitality": 2,
  "intelligence": 1,
  "luck": 1,
  "charm": 1,
  "reputation": 1,
  "gold": 50
}
```

### inventory
```json
[
  {
    "id": "iron_sword",
    "name": "Iron Sword",
    "type": "weapon",
    "subType": "main_weapon",
    "description": "A sturdy iron blade that increases your combat prowess",
    "effects": {
      "strength": 2
    },
    "value": 100,
    "sellValue": 50,
    "rarity": "common",
    "element": "Neutral"
  }
]
```

### equipment
```json
{
  "mainWeapon": {
    "id": "iron_sword",
    "name": "Iron Sword",
    "type": "weapon",
    "subType": "main_weapon",
    "description": "A sturdy iron blade that increases your combat prowess",
    "effects": {
      "strength": 2
    },
    "value": 100,
    "sellValue": 50,
    "rarity": "common",
    "element": "Neutral"
  }
}