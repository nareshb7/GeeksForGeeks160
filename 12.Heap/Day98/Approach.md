# Notes for Day 98: Find median in a stream

## Approach:

- Max Heap (left half of numbers): Stores the smaller half of numbers.
- Min Heap (right half of numbers): Stores the larger half of numbers.
- Approach
- If the new number is smaller than or equal to the maximum of the max heap, add it to the max heap.
- Otherwise, add it to the min heap.
- Balance the heaps: The max heap can have at most one more element than the min heap.
- The median is:
- The top of the max heap if it has more elements.
- The average of the tops of both heaps if they have equal elements

## Complexity

- Time Complexity: O(nlogn)
- Space Complexity: O(n logn)
