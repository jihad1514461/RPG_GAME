# Stories Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | VARCHAR(50) | PRIMARY KEY | Unique identifier for the story |
| name | VARCHAR(100) | NOT NULL | Display name of the story |
| nodes | JSON | NOT NULL | All nodes in the story |

## Story Node Structure

Each story contains multiple nodes with the following structure:

### Node Properties
| Property | Data Type | Description |
|----------|-----------|-------------|
| id | VARCHAR(50) | Unique identifier for the node |
| title | VARCHAR(100) | Title of the node |
| text | TEXT | Text content of the node |
| type | VARCHAR(20) | Type of node (story, combat, shop, choice, ending) |
| tags | JSON | Array of tags for the node |
| battle | BOOLEAN | Whether this node involves combat |
| monster | VARCHAR(50) | ID of monster for combat nodes |
| shop | JSON | Shop information for shop nodes |
| choices | JSON | Array of choices available from this node |
| dice_requirement | INT | Dice roll requirement for this node |
| is_ending | BOOLEAN | Whether this is an ending node |
| conditions | JSON | Conditions required to access this node |

## JSON Structure Examples

### nodes
```json
{
  "intro": {
    "id": "intro",
    "title": "Forest Entrance",
    "text": "Welcome, {player_name} the {player_race} {player_class}. You stand at the edge of the legendary Cursed Forest, where ancient magics and forgotten treasures await those brave enough to venture forth. Your stats are: Strength {strength}, Intelligence {intelligence}, Magic {magic}, Vitality {vitality}, Gold {gold}, Reputation {reputation}.",
    "type": "story",
    "tags": ["forest", "beginning"],
    "battle": false,
    "choices": [
      {
        "text": "battle",
        "next_node": "battle1",
        "effects": {},
        "require": {}
      }
    ]
  },
  "battle1": {
    "id": "battle1",
    "title": "Goblin Encounter",
    "text": "A goblin jumps out from behind a tree!",
    "type": "combat",
    "tags": ["combat", "goblin"],
    "battle": true,
    "choices": [
      {
        "text": "Victory! Continue your journey.",
        "next_node": "battlereward",
        "effects": {
          "xp": 50,
          "reputation": 1
        },
        "require": {
          "battleResult": "win"
        }
      },
      {
        "text": "Defeat... retreat and regroup.",
        "next_node": "end1",
        "effects": {
          "hearts": -1
        },
        "require": {
          "battleResult": "lose"
        }
      }
    ],
    "is_ending": false,
    "monster": "goblin",
    "shop": {
      "shopId": "",
      "categories": []
    }
  }
}
```

### shop
```json
{
  "shopId": "magic_emporium",
  "categories": []
}
```

### choices
```json
[
  {
    "text": "Enter the dark cave",
    "next_node": "cave_entrance",
    "effects": {
      "xp": 10
    },
    "require": {
      "strength": 2
    }
  }
]
```

### conditions
```json
{
  "requiredLevel": 5,
  "requiredStats": {
    "intelligence": 3
  },
  "requiredClasses": ["mage"],
  "requiredItems": ["magic_ring"]
}