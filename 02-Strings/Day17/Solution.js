class Solution {
  // Function to find the first non-repeating character in a string.
  nonRepeatingChar(s) {
    // code here
    let freq = {};
    for (const c of s) {
      freq[c] = (freq[c] || 0) + 1;
    }
    for (const c of s) {
      if (freq[c] === 1) {
        return c;
      }
    }
    return "$";
  }
}

// Non Repeating Character

// Given a string s consisting of lowercase Latin Letters. Return the first non-repeating character in s.
// If there is no non-repeating character, return '$'.
// Note: When you return '$' driver code will output -1.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 'f'
// Explanation: In the given string, 'f' is the first character in the string which does not repeat.
