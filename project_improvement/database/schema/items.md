# Items Table Schema

## Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | VARCHAR(50) | PRIMARY KEY | Unique identifier for the item |
| name | VARCHAR(100) | NOT NULL | Display name of the item |
| type | VARCHAR(50) | NOT NULL | Type of item (weapon, armor, accessory, consumable, quest) |
| sub_type | VARCHAR(50) | NULL | Sub-type of item (main_weapon, side_weapon, head, body, legs, shoes, ring, necklace, potion) |
| description | TEXT | NOT NULL | Description of the item |
| effects | JSON | NULL | Effects of the item on player stats |
| requirements | JSON | NULL | Requirements to use the item |
| value | INT | NOT NULL DEFAULT 0 | Value of the item in gold |
| sell_value | INT | NULL | Sell value of the item in gold |
| stackable | BOOLEAN | NULL | Whether the item can be stacked |
| quantity | INT | NULL | Default quantity for stackable items |
| rarity | VARCHAR(20) | NULL | Rarity of the item (common, uncommon, rare, epic, legendary) |
| element | VARCHAR(20) | NULL | Elemental property of the item |
| drop_chance | DECIMAL(5,4) | NULL | Chance of dropping from monsters (0.0000 to 1.0000) |

## JSON Structure Examples

### effects
```json
{
  "strength": 2,
  "magic": 1,
  "hearts": 3,
  "maxHearts": 2
}
```

### requirements
```json
{
  "strength": 3,
  "level": 5
}