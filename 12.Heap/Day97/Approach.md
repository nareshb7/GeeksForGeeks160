# Notes for Day 97: Merge K sorted linked lists

## Approach:

- Use a Min Heap to store the head nodes of all the K lists.
- Extract the smallest node from the heap (always the top element).
- Attach it to the result linked list.
- Push the next node of the extracted node into the heap (if exists).
- Repeat until the heap is empty.

## Complexity

- Time Complexity: O(nlogk)
- Space Complexity: O(n)
