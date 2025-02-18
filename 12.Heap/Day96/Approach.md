# Notes for Day 96: K Closest Points to Origin

## Approach:

- Calculate Distance: The Euclidean distance is sqrt(x² + y²), but we can ignore the square root since it doesn’t affect ordering.
- Sort Approach: Sort the points based on distance and return the first k elements. This takes O(N log N).
- Heap Approach (Optimized):
- Use a max heap of size k, keeping the k closest points.
- If a new point is closer than the farthest in the heap, replace it.
- This takes O(N log K) time, which is better when k << N

## Complexity

- Time Complexity: O(nlogk)
- Space Complexity: O(k)
