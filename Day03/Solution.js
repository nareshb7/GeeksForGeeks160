
class Solution {
  // Function to reverse the array.
  reverseArray(arr) {
    // two pointer technique
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
}

// Reverse an Array

// Input: arr = [1, 4, 3, 2, 6, 5]
// Output: [5, 6, 2, 3, 4, 1]
// Explanation: The elements of the array are 1 4 3 2 6 5. After reversing the array, the first element goes to the last position,
// the second element goes to the second last position and so on. Hence, the answer is 5 6 2 3 4 1.
