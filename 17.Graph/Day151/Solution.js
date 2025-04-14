class Solution {
  findOrder(words) {
    // code here
    const graph = new Map();
    const indegree = new Map();

    for (const word of words) {
      for (const char of word) {
        if (!graph.has(char)) {
          graph.set(char, new Set());
          indegree.set(char, 0);
        }
      }
    }

    for (let i = 0; i < words.length - 1; i++) {
      let word1 = words[i];
      let word2 = words[i + 1];

      let minLength = Math.min(word1.length, word2.length);
      let foundDifference = false;

      for (let j = 0; j < minLength; j++) {
        let c1 = word1[j];
        let c2 = word2[j];

        if (c1 !== c2) {
          if (!graph.get(c1).has(c2)) {
            graph.get(c1).add(c2);
            indegree.set(c2, indegree.get(c2) + 1);
          }
          foundDifference = true;
          break;
        }
      }

      if (!foundDifference && word1.length > word2.length) {
        return "";
      }
    }

    const queue = [];

    for (const [char, deg] of indegree.entries()) {
      if (deg === 0) queue.push(char);
    }

    let result = "";

    while (queue.length) {
      const char = queue.shift();
      result += char;

      for (const neighbor of graph.get(char)) {
        indegree.set(neighbor, indegree.get(neighbor) - 1);
        if (indegree.get(neighbor) == 0) {
          queue.push(neighbor);
        }
      }
    }

    return result.length === graph.size ? result : "";
  }
}

// Alien Dictionary

// A new alien language uses the English alphabet, but the order of letters is unknown. You are given a list of words[] from the alien language’s dictionary, where the words are claimed to be sorted lexicographically according to the language’s rules.

// Your task is to determine the correct order of letters in this alien language based on the given words. If the order is valid, return a string containing the unique letters in lexicographically increasing order as per the new language's rules. If there are multiple valid orders, return any one of them.

// However, if the given arrangement of words is inconsistent with any possible letter ordering, return an empty string ("").

// A string a is lexicographically smaller than a string b if, at the first position where they differ, the character in a appears earlier in the alien language than the corresponding character in b. If all characters in the shorter word match the beginning of the longer word, the shorter word is considered smaller.

// Note: Your implementation will be tested using a driver code. It will print true if your returned order correctly follows the alien language’s lexicographic rules; otherwise, it will print false.

// Examples:

// Input: words[] = ["baa", "abcd", "abca", "cab", "cad"]
// Output: true
// Explanation: A possible corrct order of letters in the alien dictionary is "bdac".
// The pair "baa" and "abcd" suggests 'b' appears before 'a' in the alien dictionary.
// The pair "abcd" and "abca" suggests 'd' appears before 'a' in the alien dictionary.
// The pair "abca" and "cab" suggests 'a' appears before 'c' in the alien dictionary.
// The pair "cab" and "cad" suggests 'b' appears before 'd' in the alien dictionary.
// So, 'b' → 'd' → 'a' → 'c' is a valid ordering.
