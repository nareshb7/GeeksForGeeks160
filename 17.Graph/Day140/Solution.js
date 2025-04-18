class Solution {
  orangesRotting(mat) {
    let n = mat.length,
      m = mat[0].length;
    let queue = [];
    let freshOranges = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (mat[i][j] == 2) {
          queue.push([i, j, 0]);
        } else if (mat[i][j] === 1) {
          freshOranges++;
        }
      }
    }

    if (freshOranges == 0) return 0;

    let directions = [[-1, 0], [0,1], [1, 0], [0, -1]]
    let time = 0;
    while (queue.length > 0) {
      const [r, c, t] = queue.shift();
      time = Math.max(time, t);

      for (let [dr, dc] of directions) {
        const nr = r + dr,
          nc = c + dc;

        if (nr >= 0 && nc >= 0 && nr < n && nc < m && mat[nr][nc] == 1) {
          freshOranges--;
          mat[nr][nc] = 2;
          queue.push([nr, nc, time + 1]);
        }
      }
    }

    return freshOranges == 0 ? time : -1;
  }
}

// Rotten Oranges

// Given a matrix mat[][] of dimension n * m where each cell in the matrix can have values 0, 1 or 2 which has the following meaning:
// 0 : Empty cell
// 1 : Cell have fresh oranges
// 2 : Cell have rotten oranges

// We have to determine what is the earliest time after which all the oranges are rotten. A rotten orange at index (i, j) can rot other fresh orange at indexes (i-1, j), (i+1, j), (i, j-1), (i, j+1) (up, down, left and right) in a unit time.

// Note: Your task is to return the minimum time to rot all the fresh oranges. If not possible returns -1.

// Examples:

// Input: mat[][] = [[0, 1, 2], [0, 1, 2], [2, 1, 1]]
// Output: 1
// Explanation: Oranges at positions (0,2), (1,2), (2,0) will rot oranges at (0,1), (1,1), (2,2) and (2,1) in unit time.
