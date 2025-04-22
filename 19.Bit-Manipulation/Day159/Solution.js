class Solution {
  findUnique(arr) {
      // code here
      let unique =0;
      for (const num of arr) {
          unique ^=num
      }
      
      return unique
  }
}

// Unique Number I

// Given a unsorted array arr[] of positive integers having all the numbers occurring exactly twice, except for one number which will occur only once. Find the number occurring only once.

// Examples :

// Input: arr[] = [1, 2, 1, 5, 5]
// Output: 2
// Explanation: Since 2 occurs once, while other numbers occur twice, 2 is the answer.