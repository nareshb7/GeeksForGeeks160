class Solution {
  computeArray(pattern) {
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    let len = 0;
    let i = 1;
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
  search(pat, txt) {
    const n = txt.length;
    const m = pat.length;
    const lps = this.computeArray(pat);

    let i = 0; // index for text
    let j = 0; // index for pattern
    let res = [];

    while (i < n) {
      if (txt[i] === pat[j]) {
        i++;
        j++;
      }
      if (j === m) { // if match found
        res.push(i - j);
        j = lps[j - 1];
      } else if (i < n && txt[i] !== pat[j]) { // If mismatch after j matches
        if (j != 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }

    return res;
  }
}

// Search Pattern (KMP-Algorithm)

// Given two strings, one is a text string txt and the other is a pattern string pat. The task is to print the indexes of all the occurrences of the pattern string in the text string. Use 0-based indexing while returning the indices.
// Note: Return an empty list in case of no occurrences of pattern.

// Examples :

// Input: txt = "abcab", pat = "ab"
// Output: [0, 3]
// Explanation: The string "ab" occurs twice in txt, one starts at index 0 and the other at index 3.
