# Notes for Day 107: Decode the string

## Approach:

- Use a stack to store characters and decoded substrings.
- Maintain a separate stack for multipliers (k values).
- Processing Characters:
- If you encounter a digit, accumulate it to get the full number.
- If you encounter a '[', push the current accumulated number and the partially built string onto their respective stacks.
- If you encounter a ']', pop from both stacks and construct the repeated string.
- If it's a letter, add it to the current string.
- Decoding Nested Structures: Process the most deeply nested bracket first and work your way outward using the stack.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
