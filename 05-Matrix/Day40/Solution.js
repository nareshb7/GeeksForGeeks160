class Solution {
  // Function to search a given number in row-column sorted matrix.
  searchMatrix(mat, x) {
    // code here
    const n = mat.length;
    const m = mat[0].length;
    let l = 0, r = n * m - 1;

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const midVal = mat[Math.floor(mid / m)][mid % m];
      if (midVal === x) {
        return true;
      } else if (midVal > x) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return false;
  }
}

// Search in a sorted Matrix

// Given a strictly sorted 2D matrix mat[][] of size n x m and a number x. Find whether the number x is present in the matrix or not.
// Note: In a strictly sorted matrix, each row is sorted in strictly increasing order, and the first element of the ith row (i!=0)
// is greater than the last element of the (i-1)th row.

// Examples:

// Input: mat[][] = [[1, 5, 9], [14, 20, 21], [30, 34, 43]], x = 14
// Output: true
// Explanation: 14 is present in the matrix, so output is true.
