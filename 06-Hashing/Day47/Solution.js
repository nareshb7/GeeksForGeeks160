class Solution {
  // Function to return length of longest subsequence of consecutive integers.
  longestConsecutive(arr) {
    // code here
    const set = new Set(arr); // Store all elements for O(1) lookups
    let longestStreak = 0;

    for (const num of arr) {
      // Check if num is the start of a sequence
      if (!set.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;

        // Count the length of the sequence
        while (set.has(currentNum + 1)) {
          currentNum += 1;
          currentStreak += 1;
        }

        // Update the longest streak
        longestStreak = Math.max(longestStreak, currentStreak);
      }
    }

    return longestStreak;
  }
}

// Longest Consecutive Subsequence

// Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

// Examples:

// Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
// Output: 6
// Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.
