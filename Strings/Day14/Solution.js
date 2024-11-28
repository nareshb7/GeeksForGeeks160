class Solution {
  myAtoi(s) {
    // code here
    const max = 2147483647;
    const min = -2147483648;
    const str = s.trim();
    let sign = 1, start = 0;
    if (str[0] === "-") {
      sign = -1;
      start = 1;
    } else if (str[0] === "+") {
      sign = 1;
      start = 1;
    }
    let num = 0;
    for (let i = start; i < str.length; i++) {
      const c = str[i];
      if (c >= 0 && c <= 9) {
        num = num * 10 + +c;
      } else if (isNaN(c)) {
        break;
      }
    }
    num = sign * num;
    if (num >= max) {
      return max;
    }
    if (num <= min) {
      return min;
    }
    return num == 0 ? 0 : num;
  }
}

// Implement Atoi

// Given a string s, the objective is to convert it into integer format without utilizing any built-in functions. Refer the below steps to know about atoi() function.

// Cases for atoi() conversion:

// Skip any leading whitespaces.
// Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
// Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is reached. If no digits are present, return 0.
// If the integer is greater than 231 – 1, then return 231 – 1 and if the integer is smaller than -231, then return -231.
// Examples:

// Input: s = "-123"
// Output: -123
// Explanation: It is possible to convert -123 into an integer so we returned in the form of an integer
