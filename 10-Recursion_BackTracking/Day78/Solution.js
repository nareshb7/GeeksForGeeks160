class Solution {
  /**
   * @param {number[][]} mat
   */

  solveSudoku(mat) {
    // your code here
    if (this.solve(mat)) {
      return mat;
    }
  }

  solve(board) {
    const emptyCell = this.findEmptyCell(board);
    if (!emptyCell) return true;

    let [row, col] = emptyCell;

    for (let num = 1; num <= 9; num++) {
      if (this.isValid(board, row, col, num)) {
        board[row][col] = num;

        if (this.solve(board)) return true;

        board[row][col] = 0;
      }
    }

    return false;
  }

  findEmptyCell(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) return [i, j];
      }
    }

    return null;
  }

  isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return false;
      }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) {
          return false;
        }
      }
    }

    return true;
  }
}

// Solve the Sudoku

// Given an incomplete Sudoku configuration in terms of a 9x9  2-D interger square matrix, mat[][], the task is to solve the Sudoku. It is guaranteed that the input Sudoku will have exactly one solution.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// Note: Zeros represent blanks to be filled with numbers 1-9, while non-zero cells are fixed and cannot be changed
