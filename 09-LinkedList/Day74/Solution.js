class LRUCache {
    // Constructor for initializing the cache capacity with the given value.
    constructor(cap) {
        // your code here
        this.capacity = cap;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @returns {number}
     */

    // Function to return value corresponding to the key.
    get(key) {
        // your code here
        if(!this.cache.has(key)) {
            return -1;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value)
        return value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */

    // Function for storing key-value pair.
    put(key, value) {
        // your code here
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.capacity) {
            const frstKey = this.cache.keys().next().value
            this.cache.delete(frstKey)
        }
        
        this.cache.set(key, value)
    }
}


// LRU Cache

// Design a data structure that works like a LRU Cache. Here cap denotes the capacity of the cache and Q denotes the number of queries. Query can be of two types:

// PUT x y: sets the value of the key x with value y
// GET x: gets the key of x if present else returns -1.
// The LRUCache class has two methods get() and put() which are defined as follows.

// get(key): returns the value of the key if it already exists in the cache otherwise returns -1.
// put(key, value): if the key is already present, update its value. If not present, add the key-value pair to the cache. If the cache reaches its capacity it should remove the least recently used item before inserting the new item.
// In the constructor of the class the capacity of the cache should be initialized.
// Examples:

// Input: cap = 2, Q = 2, Queries = [["PUT", 1, 2], ["GET", 1]]
// Output: [2]
// Explanation: Cache Size = 2
// ["PUT", 1, 2] will insert the key-value pair (1, 2) in the cache,
// ["GET", 1] will print the value corresponding to Key 1, ie 2.