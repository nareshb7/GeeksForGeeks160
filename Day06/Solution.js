class Solution {
  // Function to find the majority elements in the array
  findMajority(arr) {
    // Your code goes here
    let ele1 = 0;
    let ele2 = 0;
    let cnt1 = 0;
    let cnt2 = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      const val = arr[i];
      if (ele1 === val) {
        cnt1++;
      } else if (ele2 === val) {
        cnt2++;
      } else if (cnt1 === 0) {
        ele1 = val;
        cnt1 = 1;
      } else if (cnt2 === 0) {
        ele2 = val;
        cnt2 = 1;
      } else {
        cnt1--;
        cnt2--;
      }
    }

    cnt1 = 0;
    cnt2 = 0;

    for (const x of arr) {
      if (ele1 === x) cnt1++;
      if (ele2 === x) cnt2++;
    }
    let res = [];

    if (cnt1 > n / 3) res.push(ele1);
    if (cnt2 > n / 3) res.push(ele2);

    return res.sort((a, b) => a - b);
  }
}

// Majority Element II

// You are given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater 
// than one-third of the total votes, If there's not a majority vote, return an empty array.
// Note: The answer should be returned in an increasing format.


// Examples:

// Input: arr[] = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
// Output: [5, 6]
// Explanation: 5 and 6 occur more n/3 times.
