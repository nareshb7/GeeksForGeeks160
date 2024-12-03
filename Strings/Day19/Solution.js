class Solution {
  // Function to find minimum number of characters needed to make the string
  // palindrome.
  computeLPS(pattern) {
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    let i = 1;
    let len = 0;
    while (i < m) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len != 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  }
  minChar(s) {
    // your code here
    const n = s.length;
    const reversed = s.split("").reverse().join("");
    const concat = s + "#" + reversed;

    const lps = this.computeLPS(concat);
    return n - lps[lps.length - 1];
  }
}

// Min Chars to Add for Palindrome

// Given a string s, the task is to find the minimum characters to be added at the front to make the string palindrome.

// Note: A palindrome string is a sequence of characters that reads the same forward and backward.

// Examples:

// Input: s = "abc"
// Output: 2
// Explanation: Add 'b' and 'c' at front of above string to make it palindrome : "cbabc"
