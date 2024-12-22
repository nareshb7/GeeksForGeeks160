class Solution {

  matSearch(mat, x) {
      // code here
      if (!mat || mat.length === 0 || mat[0].length === 0) return false;

      let rows = mat.length;
      let cols = mat[0].length;
      let row = 0;
      let col = cols - 1;
  
      while (row < rows && col >= 0) {
          if (mat[row][col] === x) {
              return true; // Target found
          } else if (mat[row][col] > x) {
              col--; // Move left
          } else {
              row++; // Move down
          }
      }
  
      return false; // Target not found
  }
}

// Search in a Row-Column sorted matrix

// Given a 2D integer matrix mat[][] of size n x m, where every row and column is sorted in increasing order and a number x, the task is to find whether element x is present in the matrix.

// Examples:

// Input: mat[][] = [[3, 30, 38],[20, 52, 54],[35, 60, 69]], x = 62
// Output: false
// Explanation: 62 is not present in the matrix, so output is false.