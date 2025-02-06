class Solution {
  buildTree(inorder, preorder) {
    // code here
    let preIndex = 0;
    let inorderMap = new Map();

    inorder.forEach((val, i) => inorderMap.set(val, i));

    const constructTree = (left, right) => {
      if (left > right) return null;

      const rootValue = preorder[preIndex++];
      const root = new Node(rootValue);

      root.left = constructTree(left, inorderMap.get(rootValue) - 1);
      root.right = constructTree(inorderMap.get(rootValue) + 1, right);

      return root;
    };

    return constructTree(0, inorder.length - 1);
  }
}

// Construct Tree from Inorder & Preorder

// Given two arrays representing the inorder and preorder traversals of a binary tree, construct the tree and return the root node of the constructed tree.

// Note: The output is written in postorder traversal.

// Examples:

// Input: inorder[] = [1, 6, 8, 7], preorder[] = [1, 6, 7, 8]
// Output: [8, 7, 6, 1]
