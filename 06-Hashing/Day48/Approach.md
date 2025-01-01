# Notes for Day 48: Print Anagrams Together (Hashing)

## Approach: Hashing

- Traverse through the array. For each string, sort its characters to form a key.
- Use a dictionary to map the sorted key to a list of strings (anagrams).
- Finally, sort each group lexicographically and return them in the order they appear in the input array.

## Complexity

- Time Complexity: O(n\*m log m)
- Space Complexity: O(n \* m)
