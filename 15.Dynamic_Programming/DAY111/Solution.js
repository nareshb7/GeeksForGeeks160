class Solution {
  longestStringChain(words) {
    // code here
    words.sort((a, b) => a.length - b.length);

    let dp = new Map();
    let maxLength = 0;

    for (const word of words) {
      let best = 0;
      for (let i = 0; i < word.length; i++) {
        let prev = word.slice(0, i) + word.slice(i + 1)
        best = Math.max(best, (dp.get(prev) || 0) + 1)
      }
      dp.set(word, best)
      maxLength = Math.max(maxLength, best)
    }

    return maxLength
  }
}

// Longest String Chain

// You are given an array of words where each word consists of lowercase English letters.
// wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB. For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".

// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k = 1.

// Return the length of the longest possible word chain with words chosen from the given list of words in any order.

// Examples:

// Input: words[] = ["ba", "b", "a", "bca", "bda", "bdca"]
// Output: 4
// Explanation: One of the longest word chains is ["a", "ba", "bda", "bdca"].