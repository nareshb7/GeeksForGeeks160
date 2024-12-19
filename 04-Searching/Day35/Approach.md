# Notes for Day 35: Kth Missing Positive Number in a Sorted Array (Searching)

## Approach: Binary Search

- Define low = 0 and high = arr.length - 1.
- Use binary search:
- Compute missing = arr[mid] - mid - 1.
- If missing < k, move to the right half (low = mid + 1).
- Otherwise, move to the left half (high = mid - 1).
- After exiting the loop, calculate the k-th missing number using: result=arr[high]+(k−(missing[high])).

## Complexity

- Time Complexity:O(logn) for binary search.
- Space Complexity: O(1)
