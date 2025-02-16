# Notes for Day 94: Serialize and deserialize a binary tree

## Approach:

- Serialization (serialize):
- Uses level-order traversal (BFS).
- Stores node values in an array.
- null is used for missing nodes.

- Deserialization (deSerialize):
- Reconstructs the tree using BFS.
- Uses a queue to assign children in level-order.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
