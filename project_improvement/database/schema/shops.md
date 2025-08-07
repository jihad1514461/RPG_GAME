# Shops Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | VARCHAR(50) | PRIMARY KEY | Unique identifier for the shop |
| name | VARCHAR(100) | NOT NULL | Display name of the shop |
| categories | JSON | NOT NULL | Array of item categories sold in the shop |
| items | JSON | NOT NULL | Array of items available in the shop |
| buy_multiplier | DECIMAL(3,2) | NOT NULL DEFAULT 1.00 | Price multiplier for buying items |
| sell_multiplier | DECIMAL(3,2) | NOT NULL DEFAULT 0.50 | Price multiplier for selling items |

## JSON Structure Examples

### categories
```json
["weapons", "armor", "potions"]
```

### items
```json
[
  {
    "id": "health_potion",
    "name": "Health Potion",
    "type": "consumable",
    "subType": "potion",
    "description": "Restores 3 hearts when consumed",
    "effects": {
      "hearts": 3
    },
    "value": 50,
    "sellValue": 25,
    "stackable": true,
    "quantity": 1,
    "rarity": "common",
    "stock": 10,
    "category": "potions"
  }
]