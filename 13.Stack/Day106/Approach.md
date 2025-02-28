# Notes for Day 106: Evaluation of Postfix Expression

## Approach:

- Use a stack to store operands.
- Traverse the array from left to right.
- If an operand is encountered, push it onto the stack.
- If an operator is encountered, pop the last two operands from the stack, apply the operation, and push the result back.
- Return the final result from the stack.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
