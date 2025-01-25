# Notes for Day 72: Find the first node of loop in linked list

## Approach:

- Take two pointers slow and fast
- Traverse the list until the fast or fast.next becomes null
- Move the slow pointer one step and fast pointer two steps at a time
- If the fast pointer reaches the end of the list (null), it indicates there is no loop.
- If there is a loop, the slow and fast pointers will eventually meet inside the loop 
- Once a loop is detected, reset slow to the head and move both slow and fast one step at a time.
- The node where they meet again is the start of the loop return slow or fast pointer.
- If there is no loop return null

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
