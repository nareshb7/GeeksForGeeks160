class Solution {
  singleNum(arr) {
      // code here
      let xor = 0;
      
      for (const num of arr) {
          xor^=num
      }
      
      const rightMostSetBit = xor & -xor;
      
      let x =0, y=0;
      
      for (const num of arr) {
          if (num & rightMostSetBit) {
              x^=num
          } else {
              y^=num
          }
      }
      
      return x<y ? [x,y]: [y,x]
  }
}

// Unique Number II

// Given an array arr[] containing 2*n + 2 positive numbers, out of which 2*n numbers exist in pairs whereas the other two number occur exactly once and are distinct. Find the other two numbers. Return the answer in increasing order.

// Examples:

// Input: arr[] = [1, 2, 3, 2, 1, 4]
// Output: [3, 4] 
// Explanation: 3 and 4 occur exactly once.