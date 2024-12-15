class Solution {
    peakElement(arr) {
        // Code here
        let n = arr.length;

        // Edge case: If there's only one element, it's the peak
        if (n === 1) return 0;
    
        for (let i = 0; i < n; i++) {
            let left = i === 0 ? -Infinity : arr[i - 1];
            let right = i === n - 1 ? -Infinity : arr[i + 1];
    
            // Check if the current element is a peak
            if (arr[i] > left && arr[i] > right) {
                return i;
            }
        }
    
        return -1; // No peak element found (shouldn't happen with the given constraints)
    }
}


// Peak element

// Given an array arr[] where no two adjacent elements are same, find the index of a peak element. An element is considered to be a 
// peak if it is greater than its adjacent elements (if they exist). If there are multiple peak elements, return index of any one of them. 
// The output will be "true" if the index returned by your function is correct; otherwise, it will be "false".

// Note: Consider the element before the first element and the element after the last element to be negative infinity.

// Examples :

// Input: arr = [1, 2, 4, 5, 7, 8, 3]
// Output: true
// Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].