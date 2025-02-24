# Notes for Day 102: Stock span problem

## Approach:

- Use a stack to store indices of stock prices.
- Iterate through the array:
- If the stack is empty, span is 1.
- Pop elements from the stack while the top of the stack has a price less than or equal to the current price.
- The span for the current index i is i - stack[top], where top is the last remaining element in the stack after popping.
- Push the current index i into the stack.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
