class Solution {
  maxValue(arr) {
    // code here
    let n = arr.length;
    if (n === 0) return arr[0];

    const robLinear = (arr, start, end) => {
      let prev1 = 0,
        prev2 = 0;

      for (let i = start; i <= end; i++) {
        let curr = Math.max(prev1, arr[i] + prev2);
        prev2 = prev1;
        prev1 = curr;
      }

      return prev1;
    };

    return Math.max(robLinear(arr, 0, n - 2), robLinear(arr, 1, n - 1));
  }
}

// Stickler Thief II

// You are given an array arr[] which represents houses arranged in a circle, where each house has a certain value. A thief aims to maximize the total stolen value without robbing two adjacent houses.
// Determine the maximum amount the thief can steal.

// Note: Since the houses are in a circle, the first and last houses are also considered adjacent.

// Examples:

// Input: arr[] = [2, 3, 2]
// Output: 3
// Explanation: arr[0] and arr[2] can't be robbed because they are adjacent houses. Thus, 3 is the maximum value thief can rob.
