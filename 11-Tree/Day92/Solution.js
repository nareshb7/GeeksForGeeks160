class Solution {
    correctBST(root) {
        // your code here
        let first = null, second = null, prev = null;
        
        const inOrder =(node) => {
            if (!node) return;
            
            inOrder(node.left);
            
            if (prev && prev.data > node.data) {
                if (!first) first = prev
                
                second = node
            }
            prev = node;
            inOrder(node.right);
        }
        
        inOrder(root);
        
        if (first && second) {
            [first.data, second.data] = [second.data, first.data]
        }
    }
}


// Fixing Two nodes of a BST

// Given the root of a Binary search tree(BST), where exactly two nodes were swapped by mistake. Your task is to fix (or correct) the BST by swapping them back. Do not change the structure of the tree.
// Note: It is guaranteed that the given input will form BST, except for 2 nodes that will be wrong. All changes must be reflected in the original Binary search tree(BST).
 
// Examples :
// Input: root = [10, 5, 8, 2, 20]
     
// Output: 1
       

// Explanation: The nodes 20 and 8 were swapped. 