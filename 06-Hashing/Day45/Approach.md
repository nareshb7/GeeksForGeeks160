# Notes for Day 45: Intersection of Two arrays with Duplicate Elements (Hashing)

## Approach: Hashing

- Use a Set to store the unique elements from the first array.
- Iterate through the second array and check if the element exists in the Set.
- If it does, add it to the result set and remove it from the first set to avoid duplicates in the result.
- Convert the result set to an array and return it.

## Complexity

- Time Complexity: O(a.length+b.length)
- Space Complexity: O(a.length)
