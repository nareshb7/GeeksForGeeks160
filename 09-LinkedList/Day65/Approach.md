# Notes for Day 65: Reverse a linked list

## Approach:

- Initialize Variables:
- prev = null: Tracks the previous node.
- current = head: Points to the current node being processed.
- Traverse the list while current is not null:
- Store the next node: next = current.next.
- Reverse the pointer of the current node: current.next = prev.
- Move the prev and current pointers forward:
- prev = current.
- current = next.
- Update the Head: Once the loop ends, prev will point to the new head of the reversed list.
- Return prev: prev is the new head of the reversed list.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
