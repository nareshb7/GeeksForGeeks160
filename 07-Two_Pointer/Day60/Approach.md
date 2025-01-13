# Notes for Day 60: Container With Most Water

## Approach:

- Initialize two pointers:
- left pointing to the start of the array.
- right pointing to the end of the array.
- Traverse the array:
- Calculate the width by calculating right and left
- Take min height by comparing array left and array right values
- Update the maxArea by comaring with current area and maxArea
- Compare arr[left] and arr[right].
- If arr[left] is smaller: Move the left pointer to the right.
- Otherwise: Move the right pointer to the left.
- return the maxArea

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
