class Solution {
  countPairs(arr, target) {
    // write your code here
    const hashMap = new Map();
    let cnt = 0;

    for (const num of arr) {
      const comp = target - num;
      if (hashMap.has(comp)) {
        cnt += hashMap.get(comp);
      }
      hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }
    return cnt;
  }
}

// Count pairs with given sum

// Given an array arr[] and an integer target. You have to find numbers of pairs in array arr[] which sums up to given target.

// Examples:

// Input: arr[] = [1, 5, 7, -1, 5], target = 6
// Output: 3
// Explanation: Pairs with sum 6 are (1, 5), (7, -1) and (1, 5).
