class Solution {
  // Function to find the trapped water between the blocks.
  maxWater(arr) {
    // code here
    let left = 0,
      right = arr.length - 1;
    let leftMax = 0,
      rightMax = 0;
    let waterTrapped = 0;

    while (left <= right) {
      if (arr[left] <= arr[right]) {
        if (arr[left] >= leftMax) {
          leftMax = arr[left];
        } else {
          waterTrapped += leftMax - arr[left];
        }
        left++;
      } else {
        if (arr[right] >= rightMax) {
          rightMax = arr[right];
        } else {
          waterTrapped += rightMax - arr[right];
        }
        right--;
      }
    }

    return waterTrapped;
  }
}

// Trapping Rain Water

// Given an array arr[] with non-negative integers representing the height of blocks. If the width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.

// Examples:

// Input: arr[] = [3, 0, 1, 0, 4, 0 2]
// Output: 10
// Explanation: Total water trapped = 0 + 3 + 2 + 3 + 0 + 2 + 0 = 10 units.
