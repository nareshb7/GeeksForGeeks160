class Solution {
  anagrams(arr) {
    // code here
    const map = new Map();

    for (const str of arr) {
      const anag = str.split("").sort().join("");
      if (!map.has(anag)) {
        map.set(anag, []);
      }

      map.get(anag).push(str);
    }

    const res = [];

    for (const anag of map.values()) {
      res.push(anag);
    }
    return res;
  }
}

// Print Anagrams Together

// Given an array of strings, return all groups of strings that are anagrams. The groups must be created in order of their appearance in the original array. Look at the sample case for clarification.

// Note: The final output will be in lexicographic order.

// Examples:

// Input: arr[] = ["act", "god", "cat", "dog", "tac"]
// Output: [["act", "cat", "tac"], ["god", "dog"]]
// Explanation: There are 2 groups of anagrams "god", "dog" make group 1. "act", "cat", "tac" make group 2.
