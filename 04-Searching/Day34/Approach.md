# Notes for Day 34: Allocate Minimum Pages (Searching)

## Approach: Binary Search

- Check Feasibility: Write a function to check if it is possible to allocate books such that no student receives more than maxPages.
- Binary Search on Answer:
- The minimum possible maximum pages is the maximum value in the array (max(arr)), as at least one student must get at least one book.
- The maximum possible maximum pages is the sum of all the elements in the array (sum(arr)), as one student could receive all the books.
- Iterative Binary Search:
- While low <= high:
- Calculate the middle point mid.
- Check if it is feasible to allocate books such that the maximum pages assigned to a student is mid.
- If feasible, reduce the range to find a smaller maximum (high = mid - 1).
- Otherwise, increase the range (low = mid + 1).
- Output the Result: The smallest feasible value found during the binary search will be the result

## Complexity

- Time Complexity:
  Binary search runs in O(log(sum−max)).
  Feasibility check runs in O(n) for each binary search step.
  Total: O(n⋅log(sum−max)).
- Space Complexity: O(1), as no additional data structures are used
