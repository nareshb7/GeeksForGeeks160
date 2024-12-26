class Solution {
  twoSum(arr, target) {
    // code here
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
      const comp = target - arr[i];

      if (hash[comp]) {
        return true;
      } else {
        hash[arr[i]] = true;
      }
    }
    return false;
  }
}

// Two Sum - Pair with Given Sum

// Given an array arr[] of positive integers and another integer target. Determine if there exists two distinct indices such that the sum of there elements is equals to target.

// Examples:

// Input: arr[] = [1, 4, 45, 6, 10, 8], target = 16
// Output: true
// Explanation: arr[3] + arr[4] = 6 + 10 = 16.
