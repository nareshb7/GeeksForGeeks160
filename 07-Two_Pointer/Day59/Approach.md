# Notes for Day 59: Trapping Rain Water

## Approach:

- Initialize two pointers:
- left pointing to the start of the array.
- right pointing to the end of the array.
- Maintain two variables:
- left_max to store the maximum height on the left.
- right_max to store the maximum height on the right.
- Traverse the array:
- Compare height[left] and height[right].
- If height[left] is smaller:
- Update left_max and calculate water trapped at the current left.
- Move the left pointer to the right.
- Otherwise: Update right_max and calculate water trapped at the current right.
- Move the right pointer to the left.
- Sum up all trapped water.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)
