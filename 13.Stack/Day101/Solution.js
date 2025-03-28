class Solution {
  // Function to find the next greater element for each element of the array.
  nextLargerElement(arr) {
    // code here
    let n = arr.length;
    let stack = [];
    let nge = new Array(n).fill(-1);

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }

      if (stack.length > 0) {
        nge[i] = stack[stack.length - 1];
      }
      stack.push(arr[i]);
    }

    return nge;
  }
}

// Next Greater Element

// Given an array arr[ ] of integers, the task is to find the next greater element for each element of the array in order of their appearance in the array. Next greater element of an element in the array is the nearest element on the right which is greater than the current element.
// If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.

// Examples

// Input: arr[] = [1, 3, 2, 4]
// Output: [3, 4, 4, -1]
// Explanation: The next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4, since it doesn't exist, it is -1.
