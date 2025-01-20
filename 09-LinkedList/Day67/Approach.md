# Notes for Day 67: Merge two sorted linked lists

## Approach:

- Create a dummy node to serve as the starting point of the merged list.
- Use two pointers to traverse both lists (head1 and head2).
- Compare the values of the current nodes and append the smaller node to the merged list.
- Move the pointer of the list from which the node was taken.
- If one list is exhausted, append the remaining nodes from the other list.
- Return the next of the dummy node as the merged list.

## Complexity

- Time Complexity: O(n + m)
- Space Complexity: O(1)
