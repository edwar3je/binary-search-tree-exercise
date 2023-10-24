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
    if(!this.root){
      this.root = new Node(val);
      return this;
    } else {
      let currentNode = this.root;
      let inProgress = true;
      while(inProgress){
        if(val < currentNode.val){
          if(currentNode.left){
            currentNode = currentNode.left
          } else {
            currentNode.left = new Node(val);
            inProgress = false;
          }
        } else {
          if(currentNode.right){
            currentNode = currentNode.right
          } else {
            currentNode.right = new Node(val);
            inProgress = false;
          }
        }
      }
      return this;
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode=this.root) {
    if(!this.root){
      this.root = new Node(val);
      return this;
    } else {
      if(val < currentNode.val){
        if(currentNode.left){
          this.insertRecursively(val, currentNode.left);
        } else {
          currentNode.left = new Node(val);
        }
      }
      else {
        if(currentNode.right){
          this.insertRecursively(val, currentNode.right);
        } else {
          currentNode.right = new Node(val);
        }
      }
      return this;
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    let inProgress = true;
    let result = undefined;
    while(inProgress){
      if(currentNode.left || currentNode.right){
        if(currentNode.val === val){
          result = currentNode;
          inProgress = false;
        }
        else if(val < currentNode.val){
          if(currentNode.left){
            currentNode = currentNode.left
          } else {
            inProgress = false;
          }
        }
        else {
          if(currentNode.right){
            currentNode = currentNode.right
          } else {
            inProgress = false;
          }
        }
      } else {
        if(currentNode.val === val){
          result = currentNode;
          inProgress = false;
        } else {
          inProgress = false;
        }
      }
    }
    return result;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode=this.root) {
    if(!currentNode){
      return undefined
    } else {
      if(val === currentNode.val){
        return currentNode
      }
      else if(val < currentNode.val){
        if(currentNode.left){
          return this.findRecursively(val, currentNode.left)
        }
        else {
          return undefined
        }
      }
      else {
        if(currentNode.right){
          return this.findRecursively(val, currentNode.right)
        }
        else {
          return undefined
        }
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(arr=[], currentNode=this.root) {
    arr.push(currentNode.val);
    if(currentNode.left){
      this.dfsPreOrder(arr, currentNode.left)
    }
    if(currentNode.right){
      this.dfsPreOrder(arr, currentNode.right)
    }
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(arr=[], currentNode=this.root) {
    if(currentNode.left){
      this.dfsInOrder(arr, currentNode.left)
    }
    arr.push(currentNode.val);
    if(currentNode.right){
      this.dfsInOrder(arr, currentNode.right)
    }
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(arr=[], currentNode=this.root) {
    if(currentNode.left){
      this.dfsPostOrder(arr, currentNode.left)
    }
    if(currentNode.right){
      this.dfsPostOrder(arr, currentNode.right)
    }
    arr.push(currentNode.val);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let arr = [];
    if(!this.root){
      return undefined
    }
    else if(!this.root.left && !this.root.right){
      return [this.root.val]
    }
    let toVisitQueue = [this.root];
    while(toVisitQueue.length){
      let currentNode = toVisitQueue.shift();
      arr.push(currentNode.val);
      if(currentNode.left){
        toVisitQueue.push(currentNode.left)
      }
      if(currentNode.right){
        toVisitQueue.push(currentNode.right)
      }
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, currentNode=this.root, priorNode=null) {
    
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    if(!this.root || !this.root.left && !this.root.right){
      return undefined
    }
    let unsortedArray = this.dfsInOrder();
    let sortedArray = unsortedArray.sort((a, b) => b - a);
    return sortedArray[1];
  }
}

module.exports = BinarySearchTree;
