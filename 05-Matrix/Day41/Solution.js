class Solution {
  /**
   * @param {number[][]} mat
   */
  setMatrixZeroes(mat) {
    // your code here
    const n = mat.length;
    const m = mat[0].length;
    let frstRowHasZero = false;
    let frstColHasZero = false;

    // Check if frst row has zero
    for (let i = 0; i < m; i++) {
      if (mat[0][i] === 0) {
        frstRowHasZero = true;
        break;
      }
    }

    // check if frst col has zero
    for (let i = 0; i < n; i++) {
      if (mat[i][0] === 0) {
        frstColHasZero = true;
        break;
      }
    }

    //  update frst row and col as zero in particular index pos
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (mat[i][j] === 0) {
          mat[i][0] = 0;
          mat[0][j] = 0;
        }
      }
    }

    // mark as zero based on frst row or col has zero
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (mat[i][0] === 0 || mat[0][j] === 0) {
          mat[i][j] = 0;
        }
      }
    }
    // update the first col
    if (frstColHasZero) {
      for (let i = 0; i < n; i++) {
        mat[i][0] = 0;
      }
    }
    // update the first row
    if (frstRowHasZero) {
      for (let i = 0; i < m; i++) {
        mat[0][i] = 0;
      }
    }

    return mat;
  }
}

// Set Matrix Zeroes

// You are given a 2D matrix mat[][] of size n×m. The task is to modify the matrix such that if mat[i][j] is 0, all the elements in the i-th row and j-th column are set to 0 and do it in constant space complexity.

// Examples:

// Input: mat[][] = [[1, -1, 1],
//                 [-1, 0, 1],
//                 [1, -1, 1]]
// Output: [[1, 0, 1],
//         [0, 0, 0],
//         [1, 0, 1]]
// Explanation: mat[1][1] = 0, so all elements in row 1 and column 1 are updated to zeroes.
