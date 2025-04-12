class Solution {
  floodFill(image, sr, sc, newColor) {
    // code here
    const originalColor = image[sr][sc];

    if (originalColor === newColor) return image;

    const rows = image.length;
    const cols = image[0].length;

    const dfs = (r, c) => {
      if (r < 0 || c < 0 || r >= rows || c >= cols) return;

      if (image[r][c] !== originalColor) return;

      image[r][c] = newColor;

      dfs(r - 1, c);
      dfs(r + 1, c);
      dfs(r, c - 1);
      dfs(r, c + 1);
    };

    dfs(sr, sc);

    return image;
  }
}

// Flood fill Algorithm

// You are given a 2D grid image[][] of size n*m, where each image[i][j] represents the color of a pixel in the image. Also provided a coordinate(sr, sc) representing the starting pixel (row and column) and a new color value newColor.

// Your task is to perform a flood fill starting from the pixel (sr, sc), changing its color to newColor and the color of all the connected pixels that have the same original color. Two pixels are considered connected if they are adjacent horizontally or vertically (not diagonally) and have the same original color.

// Examples:

// Input: image[][] = [[1, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]], sr = 1, sc = 2, newColor = 2

// Output: [[2, 2, 2, 0], [0, 2, 2, 2], [1, 0, 2, 2]]

// Explanation: Starting from pixel (1, 2) with value 1, flood fill updates all connected pixels (up, down, left, right) with value 1 to 2, resulting in [[2, 2, 2, 0], [0, 2, 2, 2], [1, 0, 2, 2]].
