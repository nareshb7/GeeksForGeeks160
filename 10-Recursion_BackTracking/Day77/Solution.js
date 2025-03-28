class Solution {
  nQueen(n) {
    // code here
    let res = [];
    let temp = [];

    let col = Array(n).fill(false);
    let ndiag = Array(2 * n - 1).fill(false);
    let rdiag = Array(2 * n - 1).fill(false);

    const solve = (currR) => {
      if (currR == n) {
        res.push([...temp]);
        return;
      }

      for (let i = 0; i < n; i++) {
        if (!col[i] && !ndiag[currR + i] && !rdiag[currR - i + n - 1]) {
          temp.push(i + 1);

          col[i] = true;
          ndiag[currR + i] = true;
          rdiag[currR - i + n - 1] = true;

          solve(currR + 1);

          temp.pop();
          col[i] = false;
          ndiag[currR + i] = false;
          rdiag[currR - i + n - 1] = false;
        }
      }
    };
    solve(0);
    return res;
  }
}

// N-Queen Problem

// The n-queens puzzle is the problem of placing n queens on a (n × n) chessboard such that no two queens can attack each other. Note that two queens attack each other if they are placed on the same row, the same column, or the same diagonal.

// Given an integer n, find all distinct solutions to the n-queens puzzle.
// You can return your answer in any order but each solution should represent a distinct board configuration of the queen placements, where the solutions are represented as permutations of [1, 2, 3, ..., n]. In this representation, the number in the ith position denotes the row in which the queen is placed in the ith column.
// For eg. below figure represents a chessboard [3 1 4 2].

// Examples:

// Input: n = 1
// Output: [1]
// Explaination: Only one queen can be placed in the single cell available.
