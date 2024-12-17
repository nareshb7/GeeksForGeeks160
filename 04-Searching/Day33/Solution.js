class Solution {
  // Function to solve the problem.
  aggressiveCows(stalls, k) {
    // Step 1: Sort the stalls array
    stalls.sort((a, b) => a - b);
    let n = stalls.length;
    let low = 1; // Minimum possible distance
    let high = stalls[n - 1] - stalls[0]; // Maximum possible distance
    let result = 0;

    // Step 2: Binary Search on the solution space
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (this.isPossible(stalls, n, k, mid)) {
        result = mid; // Update result
        low = mid + 1; // Try for a larger distance
      } else {
        high = mid - 1; // Reduce the distance
      }
    }
    return result;
  }
  // helper func
  isPossible(stalls, n, k, minDist) {
    let cowsPlaced = 1; // Place the first cow in the first stall
    let lastPos = stalls[0];
    for (let i = 1; i < n; i++) {
      if (stalls[i] - lastPos >= minDist) {
        cowsPlaced++;
        lastPos = stalls[i];

        if (cowsPlaced === k) {
          return true; // Successfully placed all k cows
        }
      }
    }
    return false;
  }
}

// Aggressive Cows

// You are given an array with unique elements of stalls[], which denote the position of a stall. You are also given an integer k which denotes the number of aggressive cows. Your task is to assign stalls to k cows such that the minimum distance between any two of them is the maximum possible.

// Examples :

// Input: stalls[] = [1, 2, 4, 8, 9], k = 3
// Output: 3
// Explanation: The first cow can be placed at stalls[0],
// the second cow can be placed at stalls[2] and
// the third cow can be placed at stalls[3].
// The minimum distance between cows, in this case, is 3, which also is the largest among all possible ways.
