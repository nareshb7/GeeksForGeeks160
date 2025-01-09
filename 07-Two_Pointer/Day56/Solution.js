class Solution {
  subarraySum(arr, target) {
      // code here
      let start =0;
      let end =0;
      let sum =0;
      const n = arr.length
      
      while (start <n && end <=n) {
          if (sum > target) {
              sum-=arr[start]
              start++;
          } else {
              
              sum+=arr[end];
              end++;
          }
          if (sum == target) {
              return [start+1, end]
          }
      }
      return [-1]
  }
}

// Indexes of Subarray Sum

// Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.

// Note: If no such array is possible then, return [-1].

// Examples:

// Input: arr[] = [1, 2, 3, 7, 5], target = 12
// Output: [2, 4]
// Explanation: The sum of elements from 2nd to 4th position is 12