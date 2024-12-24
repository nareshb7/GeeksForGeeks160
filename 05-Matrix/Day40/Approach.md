# Notes for Day 40: Search in a sorted Matrix (Matrix)

## Approach:

- Treat the 2D matrix as a flattened sorted array:
- Use two pointers, left = 0 and right = n⋅m - 1, where n is the number of rows and m is the number of columns.
- Use binary search:
- Calculate the mid-point index and determine its corresponding element using:
  midVal = matrix[mid / m][mid % m]
- Compare midVal with the target:
- If midVal == target, return true.
- If midVal < target, move the left pointer.
- If midVal > target, move the right pointer.
- If the search ends without finding the target, return false.

## Complexity

- Time Complexity: O(log (n \* m)), where n is the number of rows and m is the number of columns
- Space Complexity: O(1) (no extra space used).
