class Solution {
  expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.substring(left + 1, right);
  }

  longestPalindrome(s) {
    let n = s.length;
    if (n <= 0) return "";

    let longestPal = "";
    for (let i = 0; i < n; i++) {
      let pal1 = this.expandAroundCenter(s, i, i);
      if (pal1.length > longestPal.length) {
        longestPal = pal1;
      }

      let pal2 = this.expandAroundCenter(s, i, i + 1);
      if (pal2.length > longestPal.length) {
        longestPal = pal2;
      }
    }

    return longestPal;
  }
}

// Longest Palindrome in a String

// Given a string s, your task is to find the longest palindromic substring within s.

// A substring is a contiguous sequence of characters within a string, defined as s[i...j] where 0 ≤ i ≤ j < len(s).

// A palindrome is a string that reads the same forward and backward. More formally, s is a palindrome if reverse(s) == s.

// Note: If there are multiple palindromic substrings with the same length, return the first occurrence of the longest palindromic substring from left to right.

// Examples :

// Input: s = “forgeeksskeegfor”
// Output: “geeksskeeg”
// Explanation: There are several possible palindromic substrings like “kssk”, “ss”, “eeksskee” etc. But the substring “geeksskeeg” is the longest among all.
