# Notes for Day 52: Count Pairs whose sum is less than target

## Approach: (Two Pointers)

- Sorting: The array is sorted to enable the two-pointer approach.
- Two Pointers:
- Start with left at the beginning and right at the end of the array.
- If the sum of arr[left] + arr[right] is less than the target, then all pairs between left and right are valid (as the array is sorted). Add right−left to the count.
- Move the left pointer to the right to check the next possible pair.
- If the sum is greater than or equal to the target, decrease the right pointer to check smaller values.
- Count Update: The count is updated whenever a valid pair is found.

## Complexity

- Time Complexity: O(n log n)
- Space Complexity: O(1)
