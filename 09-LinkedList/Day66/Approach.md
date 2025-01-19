# Notes for Day 66:Rotate a Linked List

## Approach:

- Traverse the list to find its length 𝑛 
- If k%n==0, return the head as no rotation is needed.
- Adjust k: Use k=k%n to handle cases where k>n. 
- Traverse to the k-th node: The k-th node becomes the new tail.
- The (k+1)-th node becomes the new head.
- Break and connect:
- Break the link at the k-th node.
- Link the previous tail to the original head.
- Return the new head.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
