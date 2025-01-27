# Notes for Day 74: LRU Cache

## Approach:

- Constructor (constructor(capacity)): Initializes the cache with a given capacity.
- get(key): 
- If the key exists, move it to the end (most recently used).
- Return the value; otherwise, return -1 if not found.
- put(key, value): 
- If the key exists, delete it first to update its position.
- If the cache is at capacity, remove the least recently used (first inserted) item.
- Add the new key-value pair.

## Complexity

- Time Complexity: O(1)
- Space Complexity: O(capacity)
