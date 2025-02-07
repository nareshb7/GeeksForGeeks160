class Solution {
  inOrder(root) {
    // your code here
    let res = [];

    const traverse = (node) => {
      if (!node) return null;

      traverse(node.left);
      res.push(node.data);
      traverse(node.right);
    };
    traverse(root);
    // let stack =[];
    // let current = root;

    // while (current || stack.length > 0) {
    //     while (current) {
    //         stack.push(current)
    //         current = current.left
    //     }

    //     current = stack.pop();
    //     res.push(current.data);
    //     current = current.right;
    // }
    return res;
  }
}

// Inorder Traversal

// Given a Binary Tree, your task is to return its In-Order Traversal.

// An inorder traversal first visits the left child (including its entire subtree), then visits the node, and finally visits the right child (including its entire subtree).

// Follow Up: Try solving this with O(1) auxiliary space.

// Examples:

// Input: root[] = [1, 2, 3, 4, 5]

// Output: [4, 2, 5, 1, 3]
// Explanation: The in-order traversal of the given binary tree is [4, 2, 5, 1, 3].
