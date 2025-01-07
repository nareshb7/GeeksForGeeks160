class Solution {
  countPairs(arr, target) {
    // code here
    let left = 0, right = arr.length - 1;
    let cnt = 0;
    while (left < right) {
      const sum = arr[left] + arr[right];

      if (sum == target) {
        let e1 = arr[left],e2 = arr[right];
        let c1 = 0, c2 = 0;

        while (left <= right && arr[left] === e1) {
          c1++;
          left++;
        }

        while (left <= right && arr[right] === e2) {
          c2++;
          right--;
        }

        if (e1 === e2) {
          cnt += (c1 * (c1 - 1)) / 2;
        } else {
          cnt += c1 * c2;
        }
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return cnt;
  }
}

// Pair with given sum in a sorted array

// You are given an integer target and an array arr[]. You have to find number of pairs in arr[] which sums up to target. It is given that the elements of the arr[] are in sorted order.
// Note: pairs should have elements of distinct indexes. 

// Examples :

// Input: arr[] = [-1, 1, 5, 5, 7], target = 6
// Output: 3
// Explanation: There are 3 pairs which sum up to 6 : {1, 5}, {1, 5} and {-1, 7}.
