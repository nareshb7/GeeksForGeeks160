# Notes for Day 111: Longest String Chain

## Approach:

- Sort words by length:
- A longer word can only be formed from a shorter one, so sorting helps process in the correct order.
- Use a HashMap (dp) to store the longest chain ending at each word:
- Iterate over each word and try removing one character at a time to check if the remaining substring exists in dp.
- If it exists, update the chain length.
- Track the maximum chain length found.

## Complexity

- Time Complexity: O(nlogn+n⋅m),
- Space Complexity: O(n)
