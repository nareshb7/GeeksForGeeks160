# Notes for Day 42: Two Sum - Pair with Given Sum (Hashing)

## Approach: Hashing

- Iterate through the array while maintaining a hash table to store elements.
- For each element num, calculate the complement: complement = target - num  
- Check if the complement exists in the hash table:
- If yes, return true (a valid pair exists).
- If no, store the current element in the hash table.
- If the loop completes without finding a pair, return false.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
