class Solution {
  maxWater(arr) {
      // code here
      let maxArea =0;
      const n = arr.length
      let left =0, right =n-1;
      
      while (left<right) {
          
          const width = right - left;
          const minHeight = Math.min(arr[left], arr[right])
          
          const area = minHeight * width
          maxArea = Math.max(area, maxArea)
          
          if (arr[left] < arr[right]) {
              left++
          } else {
              right--
          }
          
      }
      
      return maxArea
  }
}

// Container With Most Water

// Given an array arr[] of non-negative integers, where each element arr[i] represents the height of the vertical lines, find the maximum amount of water that can be contained between any two lines, together with the x-axis.

// Note: In the case of a single vertical line it will not be able to hold water.

// Examples:

// Input: arr[] = [1, 5, 4, 3]
// Output: 6
// Explanation: 5 and 3 are 2 distance apart. So the size of the base is 2. Height of container = min(5, 3) = 3. So, total area to hold water = 3 * 2 = 6.