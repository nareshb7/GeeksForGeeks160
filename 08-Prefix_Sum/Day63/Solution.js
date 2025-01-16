class Solution {
  maxLen(arr) {
      // code here
      let prefixSum =0;
      let maxLen =0;
      let sumMap = new Map();
      const n = arr.length;
      
      for (let i=0; i<n; i++) {
          prefixSum+= arr[i] == 0 ? -1: 1;
          
          if (prefixSum === 0){
              maxLen = i+1;
          }
          
          if (sumMap.has(prefixSum)) {
              maxLen = Math.max(maxLen, i- sumMap.get(prefixSum))
          } else {
              sumMap.set(prefixSum, i)
          }
      }
      
      return maxLen
  }
}

// Largest subarray of 0's and 1's

// Given an array arr of 0s and 1s. Find and return the length of the longest subarray with equal number of 0s and 1s.

// Examples:

// Input: arr[] = [1, 0, 1, 1, 1, 0, 0]
// Output: 6
// Explanation: arr[1...6] is the longest subarray with three 0s and three 1s.