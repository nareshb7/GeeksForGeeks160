# Notes for Day 70: Clone List with Next and Random

## Approach:

- Insert Cloned Nodes Between Original Nodes:
- Traverse the original linked list.
- For each node, create a copy and insert it right after the original node.
- Update the next pointers accordingly.
- Copy Random Pointers:
- Traverse the modified list (with cloned nodes interleaved).
- For each original node, set the cloned node’s random pointer to the corresponding copied node using curr.random.next.
- Separate the Cloned List from Original List:
- Traverse the list again.
- Restore the original list's structure by skipping cloned nodes.
- Extract the cloned nodes into a separate list.
- Return the Cloned List's Head: The head of the cloned list is head.next (the first cloned node).

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
