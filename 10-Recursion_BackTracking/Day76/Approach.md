# Notes for Day 76: Implement Pow

## Approach:

- If e is 0, return 1 (base case).
- If e is negative, compute 1 / power(b, -e).
- Use recursion or iteration to optimize the power calculation with divide-and-conquer

## Complexity

- Time Complexity: O(log e)
- Space Complexity: O(1)
