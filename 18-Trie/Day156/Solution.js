class TrieNode {
  constructor() {
    this.children = [null, null];
  }
}

// User function Template for javascript
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(num) {
    let node = this.root;

    for (let i = 31; i >= 0; i--) {
      let bit = (num >> i) & 1;

      if (!node.children[bit]) {
        node.children[bit] = new TrieNode();
      }
      node = node.children[bit];
    }
  }

  getMaxXOR(num) {
    let node = this.root;
    let maxXor = 0;

    for (let i = 31; i >= 0; i--) {
      let bit = (num >> i) & 1;

      let oppositeBit = bit ^ 1;

      if (node.children[oppositeBit]) {
        maxXor |= 1 << i;
        node = node.children[oppositeBit];
      } else {
        node = node.children[bit];
      }
    }

    return maxXor;
  }
}

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
  maxXOR(arr) {
    // code here
    const trie = new Trie();
    let maxXor = 0;

    trie.insert(arr[0]);

    for (let i = 1; i < arr.length; i++) {
      const num = arr[i];
      maxXor = Math.max(maxXor, trie.getMaxXOR(num));
      trie.insert(num);
    }

    return maxXor;
  }
}

// Maximum XOR of two numbers in an array

// Given an array arr[] of non-negative integers of size n. Find the maximum possible XOR between two numbers present in the array.

// Examples:

// Input: arr[] = [25, 10, 2, 8, 5, 3]
// Output: 28
// Explanation: The maximum possible XOR is 5 ^ 25 = 28.
