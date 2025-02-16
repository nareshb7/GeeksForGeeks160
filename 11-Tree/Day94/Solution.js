class Solution {
    /**
     * @param {Node} root
     * @returns {number[]}
     */

    // Function to serialize a tree and return a list containing nodes of tree.
    serialize(root) {
        // your code here
        if (!root) return [];
        
        const queue = [root]
        const res =[]
        
        while (queue.length) {
            let node = queue.shift();
            
            if (node) {
                res.push(node.data);
                queue.push(node.left);
                queue.push(node.right)
            } else {
                res.push(null)
            }
        }
        
        return res
        
    }

    /**
     * @param {number[]} arr
     * @returns {Node}
     */

    // Function to deserialize a list and construct the tree
    deSerialize(arr) {
        // your code here
        
        if (!arr.length) return null;
        
        let root = new Node(arr[0]);
        let queue = [root];
        let i=1;
        
        while (queue.length && i <arr.length) {
            let node = queue.shift();
            
            if (arr[i] !== null) {
                node.left = new Node(arr[i]);
                queue.push(node.left)
            }
            i++;
            
            if (i < arr.length && arr[i] != null) {
                node.right = new Node(arr[i]);
                queue.push(node.right)
            }
            i++
        }
        return root
        
    }
}

// Serialize and deserialize a binary tree

// Serialization is to store a tree in an array so that it can be later restored and deserialization is reading tree back from the array. Complete the functions

// serialize() : stores the tree into an array a and returns the array.
// deSerialize() : deserializes the array to the tree and returns the root of the tree.
// Note: Multiple nodes can have the same data and the node values are always positive integers. Your code will be correct if the tree returned by deSerialize(serialize(input_tree)) is same as the input tree. Driver code will print the in-order traversal of the tree returned by deSerialize(serialize(input_tree)).

// Examples :

// Input: root = [1, 2, 3]
      
// Output: [2, 1, 3]