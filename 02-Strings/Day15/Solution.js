class Solution {
  addBinary(s1, s2) {
      // code here
      let i = s1.length - 1, j = s2.length - 1;
      let carry = 0;
      let result = [];
  
      while (i >= 0 || j >= 0 || carry > 0) {
          const bitA = i >= 0 ? parseInt(s1[i--]) : 0;
          const bitB = j >= 0 ? parseInt(s2[j--]) : 0;
  
          const sum = bitA + bitB + carry;
          result.push(sum % 2); // Append the current bit
          carry = Math.floor(sum / 2); // Update carry
      }
  
      // Join and reverse the result array
      return result.reverse().join('').replace(/^0+/, ''); 
  }
}

// Add Binary Strings


// Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after adding the two Binary Strings.
// Note: The input strings may contain leading zeros but the output string should not have any leading zeros.

// Input: s1 = "1101", s2 = "111"
// Output: 10100
// Explanation:
//  1101
// + 111
// 10100