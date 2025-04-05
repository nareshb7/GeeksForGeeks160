class Solution {
  numIslands(grid) {
    // code here
    const n = grid.length;
    const m = grid[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    const directions = [[-1,-1], [-1,0], [-1, 1], [0,-1], [0,1], [1,-1], [1,0], [1,1]]

    const dfs = (x, y) => {
      visited[x][y] = true;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 && nx < n &&
          ny >= 0 && ny < m &&
          !visited[nx][ny] && grid[nx][ny] == "L"
        ) {
          dfs(nx, ny);
        }
      }
    };

    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!visited[i][j] && grid[i][j] == "L") {
          dfs(i, j);
          count++;
        }
      }
    }

    return count;
  }
}


// Find the number of islands

// Given a grid of size n*m (n is the number of rows and m is the number of columns in the grid) consisting of 'W's (Water) and 'L's (Land). Find the number of islands.

// Note: An island is either surrounded by water or the boundary of a grid and is formed by connecting adjacent lands horizontally or vertically or diagonally i.e., in all 8 directions.

// Examples:

// Input: grid[][] = [['L', 'L', 'W', 'W', 'W'], ['W', 'L', 'W', 'W', 'L'], ['L', 'W', 'W', 'L', 'L'], ['W', 'W', 'W', 'W', 'W'], ['L', 'W', 'L', 'L', 'W']]
// Output: 4
// Explanation:
// The image below shows all the 4 islands in the grid.