class Solution {
  /**
   * Computes b raised to the power e recursively.
   * @param {number} b - The base.
   * @param {number} e - The exponent.
   * @returns {number} - The result of b^e.
   */
  power(b, e) {
    // Code here
    if (e === 0) return 1;

    if (e < 0) {
      b = 1 / b;
      e = -e;
    }

    let result = 1;

    while (e > 0) {
      if (e % 2 === 1) {
        result *= b;
      }

      b *= b;
      e = Math.floor(e / 2);
    }

    return result;
  }
}

// Implement Pow

// Implement the function power(b, e), which calculates b raised to the power of e (i.e. be).

// Examples:

// Input: b = 3.00000, e = 5
// Output: 243.00000
