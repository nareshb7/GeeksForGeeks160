function minCostConnectHouses(houses) {
  const n = houses.length;
  const visited = new Array(n).fill(false);
  const minHeap = [[0, 0]]; // [cost, house index]
  let totalCost = 0;

  while (minHeap.length > 0) {
    // Get the edge with the minimum cost
    minHeap.sort((a, b) => a[0] - b[0]);
    const [cost, u] = minHeap.shift();

    if (visited[u]) continue;
    visited[u] = true;
    totalCost += cost;

    // Push all edges from house u to unvisited houses
    for (let v = 0; v < n; v++) {
      if (!visited[v]) {
        const dist =
          Math.abs(houses[u][0] - houses[v][0]) +
          Math.abs(houses[u][1] - houses[v][1]);
        minHeap.push([dist, v]);
      }
    }
  }

  return totalCost;
}

// Minimum cost to connect all houses in a city

// Given a 2D array houses[][], consisting of n 2D coordinates {x, y} where each coordinate represents the location of each house, the task is to find the minimum cost to connect all the houses of the city.

// The cost of connecting two houses is the Manhattan Distance between the two points (xi, yi) and (xj, yj) i.e., |xi – xj| + |yi – yj|, where |p| denotes the absolute value of p.

// Examples :

// Input: n = 5 houses[][] = [[0, 7], [0, 9], [20, 7], [30, 7], [40, 70]]
// Output: 105
// Explanation:
// Connect house 1 (0, 7) and house 2 (0, 9) with cost = 2
// Connect house 1 (0, 7) and house 3 (20, 7) with cost = 20
// Connect house 3 (20, 7) with house 4 (30, 7) with cost = 10
// At last, connect house 4 (30, 7) with house 5 (40, 70) with cost 73.
// All the houses are connected now.
// The overall minimum cost is 2 + 10 + 20 + 73 = 105.
