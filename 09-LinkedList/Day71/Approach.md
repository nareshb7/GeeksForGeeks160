# Notes for Day 71: Detect Loop in linked list

## Approach:

- Take two pointers slow and fast
- Traverse the list until the fast or fast.next becomes null
- Move the slow pointer one step and fast pointer two steps at a time
- If there is a loop, the slow and fast pointers will eventually meet inside the loop return true.
- If the fast pointer reaches the end of the list (null), it indicates there is no loop.
- If there is no loop return false

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
