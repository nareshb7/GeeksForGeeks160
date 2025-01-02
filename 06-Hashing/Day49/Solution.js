class Solution {
  countSubarrays(arr, k) {
    // code here
    let prefixSum = 0;
    let freqMap = new Map();
    let cnt = 0;
    freqMap.set(0, 1);

    for (const num of arr) {
      prefixSum += num;

      if (freqMap.has(prefixSum - k)) {
        cnt += freqMap.get(prefixSum - k);
      }
      freqMap.set(prefixSum, (freqMap.get(prefixSum) || 0) + 1);
    }
    return cnt;
  }
}

// Subarrays with sum K

// Given an unsorted array of integers, find the number of continuous subarrays having sum exactly equal to a given number k.

// Examples:

// Input: arr = [10, 2, -2, -20, 10], k = -10
// Output: 3
// Explaination: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.
