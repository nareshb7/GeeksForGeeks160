# Notes for Day 130: Matrix Chain Multiplication

## Approach: (Top- Down Approach)

- Recursive Definition:
- Define mcm(arr, i, j) as the minimum cost to multiply matrices from index i to j.
- The problem is broken down into subproblems by placing a partition k between i and j (i ≤ k < j).
- Recursive Formula:
- The cost to multiply matrices arr[i-1] x arr[i] ... x arr[j] is computed as: dp[i][j]=min(dp[i][k]+dp[k+1][j]+arr[i−1]×arr[k]×arr[j])
- The multiplication cost at each step is arr[i-1] * arr[k] * arr[j].
- Base Case:
- If i == j, no multiplication is needed (cost = 0).
- Use Memoization: Store computed values to avoid recomputation.

## Complexity

- Time Complexity: O(n3),
- Space Complexity: O(n2)
