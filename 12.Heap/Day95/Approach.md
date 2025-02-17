# Notes for Day 95: k largest elements

## Approach:

- Use a Min-Heap (PriorityQueue) of size k.
- Insert elements and maintain only the k largest elements.
- Extract elements in descending order.

## Complexity

- Time Complexity: O(nlogk)
- Space Complexity: O(n)
