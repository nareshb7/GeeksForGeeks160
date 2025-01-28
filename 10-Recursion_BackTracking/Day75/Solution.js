class Solution {
  findPermutation(s) {
    // code here
    const results = new Set();
    const chars = s.split("");

    const backTrack = (path, used) => {
      if (path.length === s.length) {
        results.add(path.join(""));
        return;
      }

      for (let i = 0; i < chars.length; i++) {
        if (used[i]) continue;

        if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;

        used[i] = true;
        path.push(chars[i]);
        backTrack(path, used);
        path.pop();
        used[i] = false;
      }
    };

    chars.sort();
    backTrack([], Array(chars.length).fill(false));
    return Array.from(results);
  }
}

// Permutations of a String

// Given a string s, which may contain duplicate characters, your task is to generate and return an array of all unique permutations of the string. You can return your answer in any order.

// Examples:

// Input: s = "ABC"
// Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
// Explanation: Given string ABC has 6 unique permutations.
