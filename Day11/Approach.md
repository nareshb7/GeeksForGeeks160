# Notes for Day 11: Maximum Product Subarray (Array's)

## Approach

- Maintain two variables:
- maxProd: Tracks the maximum product ending at the current position.
- minProd: Tracks the minimum product ending at the current position (important when encountering negative numbers).
- Traverse the array:
- For each element, update maxProd and minProd:
- If the element is negative, swap maxProd and minProd before updating.
- Update maxProd as the maximum of:
- The current element.
- The product of maxProd with the current element.
- Update minProd as the minimum of:
- The current element.
- The product of minProd with the current element.
- Track the global maximum (result) to get the maximum product seen so far.

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
