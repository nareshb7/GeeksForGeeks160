
class Solution {
  pushZerosToEnd(arr) {
    // to track the zeros
    let left = -1;
    for (let i = 0; i < arr.length; i++) {
      
      // cond1: curr val is 0 and left not found
      if (arr[i] === 0 && left === -1) {
        left = i;
      } else if (left !== -1 && arr[i] !== 0) { 
        // cond2: we are already found zero and curr val is not zero means need to swap
        arr[left] = arr[i];
        arr[i] = 0;

        // update left pointer to next zero value position
        while (left < i) {
          if (arr[left] === 0) {
            break;
          }
          left++;
        }
      }
    }
  }
}

// Move All Zeroes to End

// Given an array arr[]. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements.
// Do the mentioned change in the array in place.

// Examples:

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.
