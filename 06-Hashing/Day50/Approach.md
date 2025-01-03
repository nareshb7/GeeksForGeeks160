# Notes for Day 50: Count Subarrays with given XOR (Hashing)

## Approach: Hashing

- Traverse the array and compute the prefixXOR at each step.
- prefixXOR, check if prefixXOR⊕k exists in the hashmap.
- If it does, add its frequency to the count.
- Update the hashmap with the current prefixXOR

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
