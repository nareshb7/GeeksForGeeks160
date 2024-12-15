# Notes for Day 31: Peak element (Searching)

## Approach (binary search)

- Edge Case: If the array has only one element, it is a peak by definition.
- Loop Through the Array: For each element, check its neighbors:
- Treat the left neighbor of the first element as -Infinity.
- Treat the right neighbor of the last element as -Infinity.
- Condition for Peak: An element is a peak if it is greater than both its neighbors.
- Return the Index: Return the index of the first peak found.

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
