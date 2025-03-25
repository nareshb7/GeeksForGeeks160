# Notes for Day 131: Boolean Parenthesization

## Approach:

- Break the expression at each operator (&, |, ^) and solve left and right subexpressions recursively.
- Store results using DP (Memoization) to avoid recomputation.
- Combine left and right results based on the operator:
- &: True only if both left and right are True.
- |: True if at least one of left or right is True.
- ^: True if exactly one of left or right is True.

## Complexity

- Time Complexity: O(n3),
- Space Complexity: O(n)
