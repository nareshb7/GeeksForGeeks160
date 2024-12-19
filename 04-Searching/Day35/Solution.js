class Solution {
  kthMissing(arr, k) {
      // code here
      let left=0, right = arr.length-1;
      
      while (left <=right) {
          const mid = Math.floor((left+right)/2)
          const missingCount= arr[mid]- (mid+1)
          
          if (missingCount<k) {
              left= mid+1
          } else {
              right = mid-1;
          }
      }
      return left+k
  }
}

// Kth Missing Positive Number in a Sorted Array

// Given a sorted array of distinct positive integers arr[], we need to find the kth positive number that is missing from arr[].  

// Examples :

// Input: arr[] = [2, 3, 4, 7, 11], k = 5
// Output: 9
// Explanation: Missing are 1, 5, 6, 8, 9, 10… and 5th missing number is 9.