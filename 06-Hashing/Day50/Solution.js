class Solution {
  subarrayXor(arr, k) {
    // your code here
    let prefixXOR = 0;
    let cnt = 0;
    let freqMap = new Map();

    freqMap.set(0, 1);

    for (let val of arr) {
      prefixXOR ^= val;

      if (freqMap.has(prefixXOR ^ k)) {
        cnt += freqMap.get(prefixXOR ^ k);
      }

      freqMap.set(prefixXOR, (freqMap.get(prefixXOR) || 0) + 1);
    }

    return cnt;
  }
}

// Count Subarrays with given XOR

// Given an array of integers arr[] and a number k, count the number of subarrays having XOR of their elements as k.

// Examples:

// Input: arr[] = [4, 2, 2, 6, 4], k = 6
// Output: 4
// Explanation: The subarrays having XOR of their elements as 6 are [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], and [6]. Hence, the answer is 4.
