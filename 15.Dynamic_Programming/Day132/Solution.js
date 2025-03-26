class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();

      node = node.children[char];
    }

    node.isEnd = true;
  }

  searchPrefix(s, start) {
    let node = this.root;
    let indices = [];

    for (let i = start; i < s.length; i++) {
      if (!node.children[s[i]]) break;

      node = node.children[s[i]];

      if (node.isEnd) indices.push(i + 1);
    }

    return indices;
  }
}

class Solution {
  wordBreak(s, dictionary) {
    // code here
    let trie = new Trie();

    for (let word of dictionary) trie.insert(word);

    let queue = [0];
    let visited = new Set();

    while (queue.length > 0) {
      let start = queue.shift();

      if (start === s.length) return true;

      if (visited.has(start)) continue;

      visited.add(start);

      let nextIndices = trie.searchPrefix(s, start);
      for (let idx of nextIndices) queue.push(idx);
    }

    return false;
  }
}

// T.C -O(n^2)
class Solution {
  wordBreak(s, dictionary) {
    // code here
    let n = s.length;
    let wordSet = new Set(dictionary);
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && wordSet.has(s.substring(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }

    return dp[n];
  }
}


// Word Break

// You are given a string s and a list dictionary[] of words. Your task is to determine whether the string s can be formed by concatenating one or more words from the dictionary[].

// Note: From dictionary[], any word can be taken any number of times and in any order.

// Examples :

// Input: s = "ilike", dictionary[] = ["i", "like", "gfg"]
// Output: true
// Explanation: s can be breakdown as "i like".