# Notes for Day 155: Implement Trie

## Approach:

- Define a Trie Node
- A node should store:
- A map/object of children (for each character).
- A boolean flag isEndOfWord to mark end of a word.
- Build the Trie Class
- It should have a root node (empty node to start with).
- Add 3 methods:
- insert(word)
- search(word)
- isPrefix(prefix)
- Method Logic
- insert(word)
- Used for: Type 1 queries
- Start from the root node.
- For each character in the word:
- If character not in current node's children, create a new node.
- Move to the child node.
- After the loop, mark the last node as isEndOfWord = true.
- search(word)
- Used for: Type 2 queries
- Start from the root node.
- For each character:
- If character not found, return false.
- Else move to the next child node.
- After the loop, return true only if the last node is marked as isEndOfWord.
- isPrefix(prefix)
- Used for: Type 3 queries
- Similar to search, but:
- Just check if all characters exist in order.
- No need to check isEndOfWord.
- If all characters found, return true.

## Complexity

- insert(word)
- Time Complexity: O(n)
- Space Complexity: O(n) (in worst case)

- search(word)
- Time Complexity: O(n)
- Space Complexity: O(1)

- isPrefix(prefix)
- Time Complexity: O(n)
- Space Complexity: O(1)
