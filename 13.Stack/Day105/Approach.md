# Notes for Day 105: Get Min from Stack

## Approach:

- Use Two Stacks
- stack: Stores all elements normally.
- minStack: Stores the minimum element at each level for constant-time (O(1)) retrieval.

- Push Operation (push(x))
- Add x to stack.
- If minStack is empty or x is ≤ top of minStack, push x to minStack.

- Pop Operation (pop())
- Remove the top element from stack.
- If the removed element is equal to top of minStack, remove it from minStack as well.
 
- Peek Operation (peek())
- Return the top element of stack.
- If stack is empty, return -1.

- Get Minimum (getMin())
- Return the top element of minStack (which is the current minimum).
- If minStack is empty, return -1.

## Complexity

- Time Complexity: O(1)
- Space Complexity: O(1)
