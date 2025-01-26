# Notes for Day 73: Remove loop in Linked List

## Approach:

- Detect the Loop (Floyd’s Cycle Detection Algorithm)
- Use two pointers, slow and fast.
- Move slow one step and fast two steps.
- If they meet, a cycle exists.
- Find the Start of the Loop
- Once the loop is detected, reset slow to the head.
- Move slow and fast one step at a time.
- The node where they meet is the start of the loop.
- Remove the Loop
- Traverse to the last node in the loop using the start position.
- Set the next pointer of the last node to null.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
