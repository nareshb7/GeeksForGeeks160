# Notes for Day 124: Partition Equal Subset Sum

## Approach:

- Check if the sum is even:
- If the total sum of the array is odd, it's impossible to divide it into two equal subsets.
- If it's even, we need to check if there exists a subset with sum = totalSum / 2.
- Use DP to check for subset sum:
- Define dp[i][j] as true if a subset with sum j can be formed using the first i elements.
- Transition:
- If arr[i-1] > j, we can't include arr[i-1], so dp[i][j] = dp[i-1][j].
- Otherwise, we have two choices:
- Exclude arr[i-1] → dp[i][j] = dp[i-1][j]
- Include arr[i-1] → dp[i][j] = dp[i-1]j - arr[i-1]]
- Optimize Space Complexity
- Instead of a 2D table, we use a 1D array, updating it right to left to avoid overwriting

## Complexity

- Time Complexity: O(n \* sum),
- Space Complexity: O(sum)
