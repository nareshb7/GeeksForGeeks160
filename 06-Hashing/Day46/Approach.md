# Notes for Day 46: Union of Arrays with Duplicates (Hashing)

## Approach: Hashing

- Use a Set to store the unique elements from the first array.
- Iterate through the second array and check if the element doesn't exists in the Set.
- If it doesn't, add it to the set 
- return the size of the set.

## Complexity

- Time Complexity: O(a.length+b.length)
- Space Complexity: O(a.length+ b.length)
