class Solution {
  countPairs(arr, target) {
    arr.sort((a, b) => a - b);

    let left = 0, right = arr.length - 1;
    let cnt = 0;

    while (left < right) {
      if (arr[left] + arr[right] < target) {
        cnt += right - left;
        left++;
      } else {
        right--;
      }
    }
    return cnt;
  }
}

// Count Pairs whose sum is less than target

// Given an array arr[] and an integer target. You have to find the number of pairs in the array whose sum is strictly less than the target.

// Examples:

// Input: arr[] = [7, 2, 5, 3], target = 8
// Output: 2
// Explanation: There are 2 pairs with sum less than 8: (2, 5) and (2, 3).
