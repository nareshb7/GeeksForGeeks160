class Solution {
  // Function is to check whether two strings are anagram of each other or not.
  areAnagrams(s1, s2) {
    // code here
    if (s.length !== t.length) return false;

    const count = {};

    for (let char of s) {
      count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
      if (!count[char]) return false; 
      count[char]--;
    }

    return true; // All characters matched

    // const l1 = s1.length;
    // const l2 = s2.length;
    // if (l1 !== l2) {
    //   return false;
    // }

    // const str1 = s1.split("").sort().join("");
    // const str2 = s2.split("").sort().join("");
    // return str1 === str2;
  }
}

// Anagram

// Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each
// other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different.
// For example, act and tac are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

// Note: You can assume both the strings s1 & s2 are non-empty.

// Examples :

// Input: s1 = "geeks", s2 = "kseeg"
// Output: true
// Explanation: Both the string have same characters with same frequency. So, they are anagrams.
