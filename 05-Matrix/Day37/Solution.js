class Solution {
  // Function to rotate matrix anticlockwise by 90 degrees.
  rotateby90(mat) {
    // code here
    const n = mat.length;
    // transpose the matrix
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const temp = mat[i][j];
        mat[i][j] = mat[j][i];
        mat[j][i] = temp;
      }
    }
    // reverse the arr in place
    for (let i = 0; i < n; i++) {
      let top = 0,
        bottom = n - 1;
      while (top < bottom) {
        const temp = mat[top][i];
        mat[top][i] = mat[bottom][i];
        mat[bottom][i] = temp;
        top++;
        bottom--;
      }
    }
  }
}

// Rotate by 90 degree

// Given a square matrix mat[][] of size n x n. The task is to rotate it by 90 degrees in an anti-clockwise direction without using any extra space.

// Examples:

// Input: mat[][] = [[1, 2, 3],
//                 [4, 5, 6]
//                 [7, 8, 9]]
// Output: Rotated Matrix:
// [3, 6, 9]
// [2, 5, 8]
// [1, 4, 7]
