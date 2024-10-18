class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;

    if(!current) { // if root is null
      this.root = new Node(val);
      return this;
    }

    while(current){
      if(!current.left && val < current.val){ // if left side is unpopulated and current.val is less than val; appends new Node to left side.
        current.left = new Node(val);
      }
      if(!current.right && val > current.val){ // if right side is unpopulated and current.val is greater than val; appends new Node to right side.
        current.right = new Node(val);
      }
      current = val < current.val ? current.left : current.right; // traverses the array
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    
    // base-cases
    if(!node.left && val < node.val) {
      node.left = new Node(val);
      return this;
    }
    if(!node.right && val > node.val) {
      node.right = new Node(val);
      return this;
    }

    if(val < node.val){ // for traversing
      return this.insertRecursively(val, node.left);
    }else{
      return this.insertRecursively(val, node.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while(current){
      if(current.val === val){
        return current;
      }
      current = val < current.val ? current.left : current.right;
    }
    return null;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if (!node) return null;

    if(node.val === val) return node;

    if(val < node.val){
      return this.findRecursively(val, node.left);
    }else{
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let current = this.root;

    if(!this.root){
      return null;
    }

    const stack = [current];
    const result = [];

    while(stack.length){
      let current = stack.pop();
      result.push(current.val);
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
    }
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root, result=[]) {

    if(!node){
      return null;
    }

    this.dfsInOrder(node.left, result);
    result.push(node.val);
    this.dfsInOrder(node.right, result);

    return result;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root, result=[]){
    if(node.left) this.dfsPostOrder(node.left, result);
    if(node.right) this.dfsPostOrder(node.right, result);
    result.push(node.val);

    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [this.root];
    const result = [];
    while(queue.length){
      const current = queue.shift();

      result.push(current.val);

      if (current.left) queue.push(current.left);

      if(current.right) queue.push(current.right);
    }
    
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
