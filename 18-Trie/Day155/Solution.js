class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

// User function Template for javascript
class Trie {
  constructor() {
    // Implement Trie
    this.root = new TrieNode();
  }

  insert(word) {
    // Insert word into Trie
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    // Search word in the Trie
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        return false;
      }
      node = node.children[ch];
    }

    return node.isEndOfWord;
  }

  isPrefix(word) {
    // Search prefix word in the Trie
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        return false;
      }
      node = node.children[ch];
    }
    return true;
  }
}

// Implement Trie

// Implement Trie class and complete insert(), search() and isPrefix() function for the following queries :

// Type 1 : (1, word), calls insert(word) function and insert word in the Trie
// Type 2 : (2, word), calls search(word) function and check whether word exists in Trie or not.
// Type 3 : (3, word), calls isPrefix(word) function and check whether word exists as a prefix of any string in Trie or not.
// Examples :

// Input: query[][] = [[1, "abcd"], [1, "abc"], [1, "bcd"], [2, "bc"], [3, "bc"], [2, "abc"]]
// Output: [false, true, true]
// Explanation: string "bc" does not exist in the trie, "bc" exists as prefix of the word "bcd" in the trie, and "abc" also exists in the trie.
