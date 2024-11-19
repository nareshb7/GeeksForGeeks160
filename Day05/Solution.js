class Solution {
  nextPermutation(arr) {
    // code here
    const n = arr.length;
    let i = n - 2;

    while (i >= 0 && arr[i] >= arr[i + 1]) {
      i--;
    }

    if (i >= 0) {
      let j = n - 1;
      while (arr[j] <= arr[i]) {
        j--;
      }

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    let l = i + 1,
      r = n - 1;
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
    return arr;
  }
}

// Next Permutation


// Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the 
// lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order 
// (i.e., sorted in ascending order). 

// Note - A permutation of an array of integers refers to a specific arrangement of its elements in a sequence or linear order.


// Example:
// Input: arr = [2, 4, 1, 7, 5, 0]
// Output: [2, 4, 5, 0, 1, 7]
// Explanation: The next permutation of the given array is {2, 4, 5, 0, 1, 7}.
