class Solution {
  // Function to sort an array of 0s, 1s, and 2s
  sort012(arr) {
    // your code here
    let zero = 0;
    let i = 0;
    let two = arr.length - 1;
    const swap = (l, r) => {
      [arr[l], arr[r]] = [arr[r], arr[l]];
    };
    while (i <= two) {
      if (arr[i] === 0) {
        swap(i, zero);
        zero++;
      }
      if (arr[i] === 2) {
        swap(i, two);
        two--;
        i--;
      }
      i++;
    }
    return arr;
  }
}

// Sort 0s, 1s and 2s

// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

// Examples:

// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: 0s 1s and 2s are segregated into ascending order.
