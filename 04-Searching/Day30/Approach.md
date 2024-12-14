# Notes for Day 30: Search in Rotated Sorted Array (Searching)

## Approach (binary search)

- Use two pointers: low and high to define the search space.
- Identify the Rotated Half: Determine which half (left or right) of the array is sorted by comparing arr[low] and arr[mid].
- Adjust Search Space: If the target lies within the sorted half, move pointers accordingly to narrow down the range.
- Iterate Until Found: Repeat the process until the target is located or the search space is exhausted

## Complexity

- Time complexity: O(log n)
- Space complexity: O(1)
