class Solution {
  minJumps(arr) {
    // code here
    let n = arr.length;

    if (n <= 1) return 0;

    if (arr[0] === 0) return -1;

    let jumps = 0,
      currEnd = 0,
      currFarthest = 0;

    for (let i = 0; i < n; i++) {
      currFarthest = Math.max(currFarthest, i + arr[i]);

      if (i === currEnd) {
        jumps++;
        currEnd = currFarthest;

        if (currEnd >= n - 1) return jumps;
      }
    }

    return -1;
  }
}

// Minimum Jumps

// You are given an array arr[] of non-negative numbers. Each number tells you the maximum number of steps you can jump forward from that position.

// For example:

// If arr[i] = 3, you can jump to index i + 1, i + 2, or i + 3 from position i.
// If arr[i] = 0, you cannot jump forward from that position.
// Your task is to find the minimum number of jumps needed to move from the first position in the array to the last position.

// Note:  Return -1 if you can't reach the end of the array.

// Examples :

// Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3
// Explanation: First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9, and from here we will jump to the last.
