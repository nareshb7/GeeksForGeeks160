// Space Complexity O(n)
class Solution {
  findMaxSum(arr) {
    // code here
    let n = arr.length;

    if (n === 0) return arr[0];
    if (n === 1) return Math.max(arr[0], arr[1]);

    let dp = Array(n + 1).fill(0);
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2]);
    }

    return dp[n - 1];
  }
}

// Space Complexity O(1)
class Solution {
  findMaxSum(arr) {
    // code here
    let n = arr.length;

    if (n === 0) return arr[0];
    if (n === 1) return Math.max(arr[0], arr[1]);

    let prev2 = 0,
      prev1 = arr[0];

    for (let i = 1; i < n; i++) {
      let curr = Math.max(prev1, arr[i] + prev2);

      prev2 = prev1;
      prev1 = curr;
    }

    return prev1;
  }
}

// Stickler Thief

// Stickler the thief wants to loot money from the houses arranged in a line. He cannot loot two consecutive houses and aims to maximize his total loot.
// Given an array, arr[] where arr[i] represents the amount of money in the i-th house.
// Determine the maximum amount he can loot.

// Examples:

// Input: arr[] = [6, 5, 5, 7, 4]
// Output: 15
// Explanation: Maximum amount he can get by looting 1st, 3rd and 5th house. Which is 6 + 5 + 4 = 15.