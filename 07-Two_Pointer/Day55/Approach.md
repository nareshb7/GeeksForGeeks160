# Notes for Day 55: Count the number of possible triangles

## Approach: (Two Pointers)

- Sort the array in ascending order
- Traverse the array using from last element to start, consider this loop element as the one of the side of triangle
- take two pointer left and right and assign the value `right = i-1`, `left=0`;
- Use While loop to find the triangle with matches the condition like `arr[left]+ arr[right] > arr[i]`
- If condition matches then that is the triangle count the element from `right-left` and `decrease the right` value;
- If `not` matches `increase the left` pointer 
- After iterating , return the count

## Complexity

- Time Complexity: O(n^ 2)
- Space Complexity: O(1)
