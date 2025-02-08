class Solution {
  boundaryTraversal(root) {
    // code here
    if (!root) return null;

    let res = [];

    const getLeftBoundary = (node) => {
      while (node) {
        if (node.right || node.left) res.push(node.data);

        node = node.left ? node.left : node.right;
      }
    };

    const getLeaves = (node) => {
      if (!node) return;

      if (!node.left && !node.right) {
        res.push(node.data);
        return;
      }
      getLeaves(node.left);
      getLeaves(node.right);
    };

    const getRightBoundary = (node) => {
      let temp = [];

      while (node) {
        if (node.left || node.right) temp.push(node.data);

        node = node.right ? node.right : node.left;
      }

      res.push(...temp.reverse());
    };

    res.push(root.data);

    if (root.left) getLeftBoundary(root.left);

    getLeaves(root.left);
    getLeaves(root.right);

    if (root.right) getRightBoundary(root.right);

    return res;
  }
}

// Tree Boundary Traversal

// Given a Binary Tree, find its Boundary Traversal. The traversal should be in the following order:

// Left Boundary: This includes all the nodes on the path from the root to the leftmost leaf node. You must prefer the left child over the right child when traversing. Do not include leaf nodes in this section.

// Leaf Nodes: All leaf nodes, in left-to-right order, that are not part of the left or right boundary.

// Reverse Right Boundary: This includes all the nodes on the path from the rightmost leaf node to the root, traversed in reverse order. You must prefer the right child over the left child when traversing. Do not include the root in this section if it was already included in the left boundary.

// Note: If the root doesn't have a left subtree or right subtree, then the root itself is the left or right boundary.

// Examples:

// Input: root[] = [1, 2, 3, 4, 5, 6, 7, N, N, 8, 9, N, N, N, N]
// Output: [1, 2, 4, 8, 9, 6, 7, 3]
