const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootNode = null;

  root() {
    return this.rootNode;
  }

  add(data) {
    let node = new Node(data);
    if (!this.rootNode) {
      this.rootNode = node;
      return;
    }

    let curNode = this.rootNode;
    while (curNode) {
      if (node.data == curNode.data) {
        return;
      } else if (node.data < curNode.data) {
        if (!curNode.left) {
          curNode.left = node;
          return;
        }

        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          curNode.right = node;
          return;
        }

        curNode = curNode.right;
      }
    }
  }

  has(data) {
    if (!this.rootNode) {
      return false;
    }

    let curNode = this.rootNode;
    while (curNode) {
      if (data == curNode.data) {
        return true;
      } else if (data < curNode.data) {
        if (!curNode.left) {
          return false;
        }

        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          return false;
        }

        curNode = curNode.right;
      }
    }
  }

  find(data) {
    if (!this.rootNode) {
      return null;
    }

    let curNode = this.rootNode;
    while (curNode) {
      if (data == curNode.data) {
        return curNode;
      } else if (data < curNode.data) {
        if (!curNode.left) {
          return null;
        }

        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          return null;
        }

        curNode = curNode.right;
      }
    }
  }

  remove(data) {
    this.rootNode = this.removeWithinNode(this.rootNode, data);
  }

  removeWithinNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data > node.data) {
      node.right = this.removeWithinNode(node.right, data);
      return node;
    }

    if (data < node.data) {
      node.left = this.removeWithinNode(node.left, data);
      return node;
    }

    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }
    let newNode = this.nodeMin(node.right);
    node.data = newNode.data;
    node.right = this.removeWithinNode(node.right, newNode.data);
    return node;
  }

  nodeMin(node) {
    let curNode = node;
    while (curNode) {
      if (curNode.left === null) {
        return curNode;
      } else {
        curNode = curNode.left;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let curNode = this.rootNode;
    while (curNode) {
      if (curNode.left === null) {
        return curNode.data;
      } else {
        curNode = curNode.left;
      }
    }
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let curNode = this.rootNode;
    while (curNode) {
      if (curNode.right === null) {
        return curNode.data;
      } else {
        curNode = curNode.right;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
