class Solution {
  isWordExist(mat, word) {
    // code here
    const rows = mat.length;
    const cols = mat[0].length;

    const dfs = (i, j, index) => {
      if (index === word.length) return true;

      if (
        i < 0 ||
        i >= rows ||
        j < 0 ||
        j >= cols ||
        mat[i][j] != word[index]
      ) {
        return false;
      }

      const temp = mat[i][j];
      mat[i][j] = "#";

      const found =
        dfs(i + 1, j, index + 1) ||
        dfs(i - 1, j, index + 1) ||
        dfs(i, j + 1, index + 1) ||
        dfs(i, j - 1, index + 1);

      mat[i][j] = temp;
      return found;
    };

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (dfs(i, j, 0)) return true;
      }
    }

    return false;
  }
}


// Word Search

// You are given a two-dimensional mat[][] of size n*m containing English alphabets and a string word. Check if the word exists on the mat. The word can be constructed by using letters from adjacent cells, either horizontally or vertically. The same cell cannot be used more than once.

// Examples :

// Input: mat[][] = [['T', 'E', 'E'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"
// Output: true
// Explanation:

// The letter cells which are used to construct the "GEEK" are colored.
