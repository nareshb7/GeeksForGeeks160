class Solution {
    LCA(root, n1, n2) {
        // your code here
        
        while (root) {
            // console.log('root:::', root.data, n1, n2)
            if (n1.data < root.data && n2.data <root.data) {
                root = root.left
            } else if (n1.data > root.data && n2.data > root.data) {
                root = root.right
            } else {
                return root
            }
        }
        
        return null
    }
}

// Lowest Common Ancestor in a BST

// Given a Binary Search Tree (with all values unique) and two nodes n1 and n2 (n1 != n2). You may assume that both nodes exist in the tree. Find the Lowest Common Ancestor (LCA) of the given two nodes in the BST.
// LCA between two nodes n1 and n2 is defined as the lowest node that has both n1 and n2 as descendants (where we allow a node to be a descendant of itself).

// Examples:

// Input: root = [5, 4, 6, 3, N, N, 7, N, N, N, 8], n1 = 7, n2 = 8
        
// Output: 7
// Explanation: 7 is the closest node to both 7 and 8, which is also an ancestor of both the nodes.