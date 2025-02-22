# Notes for Day 100: Longest valid Parentheses

## Approach:

- Use a stack to store indices of unmatched parentheses.
- Push -1 initially to handle cases where a valid substring starts from index 0.
- Traverse the string:
- If (, push its index onto the stack.
- If ), pop an element from the stack:
- If the stack is empty after popping, push the current index (to set a new base).
- Otherwise, update maxLength using currentIndex - stack[top].

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
