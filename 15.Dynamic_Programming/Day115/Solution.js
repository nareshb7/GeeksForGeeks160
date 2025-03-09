class Solution {
  /**
   * @param string s
   * @returns number
   */
  countPS(s) {
    // code here
    let count = 0;
    let n = s.length;

    const expandAroundCenter = (left, right) => {
      while (left >= 0 && right < n && s[left] === s[right]) {
        if (right - left + 1 >= 2) count++;

        left--;
        right++;
      }
    };

    for (let i = 0; i < n; i++) {
      expandAroundCenter(i, i);
      expandAroundCenter(i, i + 1);
    }

    return count;
  }
}

// Palindrome SubStrings

// Given a string s, count all palindromic sub-strings present in the string. The length of the palindromic sub-string must be greater than or equal to 2.

// Examples

// Input: s = "abaab"
// Output: 3
// Explanation: All palindromic substrings are : "aba" , "aa" , "baab".
