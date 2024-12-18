class Solution {
  // Function to find minimum number of pages.
  findPages(arr, k) {
    const n = arr.length;
    if (n < k) {
      return -1; // Not enough books for the students
    }
    let low = Math.max(...arr); // Minimum possible maxPages
    let high = arr.reduce((sum, pages) => sum + pages, 0); // Sum of all pages
    let result = high;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (this.isFeasible(arr, n, k, mid)) {
        result = mid; // Update result with the feasible solution
        high = mid - 1; // Try for a smaller maximum
      } else {
        low = mid + 1; // Increase the range to find a feasible solution
      }
    }
    return result;
  }
  // helper func
  isFeasible(arr, n, k, maxPages) {
    let currentPages = 0,
      students = 1; // Start with one student
    for (let pages of arr) {
      if (pages > maxPages) {
        // A single book has more pages than maxPages, allocation not possible
        return false;
      }
      if (currentPages + pages > maxPages) {
        // Allocate to a new student
        students++;
        currentPages = pages;
        if (students > k) {
          return false; // Exceeds the number of students
        }
      } else {
        currentPages += pages;
      }
    }
    return true;
  }
}

// Allocate Minimum Pages

// You are given an array arr[] of integers, where each element arr[i] represents the number of pages in the ith book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

// Each student receives atleast one book.
// Each student is assigned a contiguous sequence of books.
// No book is assigned to more than one student.
// The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum.

// Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).

// Examples:

// Input: arr[] = [12, 34, 67, 90], k = 2
// Output: 113
// Explanation: Allocation can be done in following ways:
// [12] and [34, 67, 90] Maximum Pages = 191
// [12, 34] and [67, 90] Maximum Pages = 157
// [12, 34, 67] and [90] Maximum Pages = 113.
// Therefore, the minimum of these cases is 113, which is selected as the output.
