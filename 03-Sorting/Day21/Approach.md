# Notes for Day 21: Sort 0s, 1s and 2s (Sorting)

## Approach

- Define a helper function swap(l, r) to swap elements in the array.
- Initialize zero = 0, i = 0, and two = arr.length - 1.
- Use a while loop until i <= two:
- If arr[i] === 0, swap it with arr[zero], increment zero.
- If arr[i] === 2, swap it with arr[two], decrement two, and re-check the current index by decrementing i.
- Always increment i at the end of the loop.
- return the arr

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)
