class Solution {
  /**
   * @param {number[]} arr
   * @return {number}
   */
  matrixMultiplication(arr) {
    // code here
    let n = arr.length;

    let dp = Array.from({ length: n }, () => Array(n).fill(-1));

    const mcm = (i, j) => {
      if (i === j) return 0;

      if (dp[i][j] !== -1) return dp[i][j];

      let minCost = Infinity;

      for (let k = i; k < j; k++) {
        let cost = mcm(i, k) + mcm(k + 1, j) + arr[i - 1] * arr[k] * arr[j];
        minCost = Math.min(minCost, cost);
      }

      return (dp[i][j] = minCost);
    };

    return mcm(1, n - 1);
  }
}

// Matrix Chain Multiplication

// Given an array arr[] which represents the dimensions of a sequence of matrices where the ith matrix has the dimensions (arr[i-1] x arr[i]) for i>=1, find the most efficient way to multiply these matrices together. The efficient way is the one that involves the least number of multiplications.

// Examples:

// Input: arr[] = [2, 1, 3, 4]
// Output: 20
// Explanation: There are 3 matrices of dimensions 2 × 1, 1 × 3, and 3 × 4, Let this 3 input matrices be M1, M2, and M3. There are two ways to multiply: ((M1 x M2) x M3) and (M1 x (M2 x M3)), note that the result of (M1 x M2) is a 2 x 3 matrix and result of (M2 x M3) is a 1 x 4 matrix. 
// ((M1 x M2) x M3)  requires (2 x 1 x 3) + (2 x 3 x 4) = 30 
// (M1 x (M2 x M3))  requires (1 x 3 x 4) + (2 x 1 x 4) = 20. 
// The minimum of these two is 20.
