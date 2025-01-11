class Solution {
  longestUniqueSubstr(s) {
    // code here
    const n = s.length;
    let maxSize = 0;
    let start = 0;
    const set = new Set();

    for (let i = 0; i < n; i++) {
      while (set.has(s[i])) {
        set.delete(s[start]);
        start++;
      }
      set.add(s[i]);

      maxSize = Math.max(maxSize, i - start + 1);
    }

    return maxSize;
  }
}

// Longest substring with distinct characters

// Given a string s, find the length of the longest substring with all distinct characters.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 7
// Explanation: "eksforg" is the longest substring with all distinct characters.
