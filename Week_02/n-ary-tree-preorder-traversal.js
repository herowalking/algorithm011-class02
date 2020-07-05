/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const res = [];
  function traversal(root) {
    if (root !== null) {
      res.push(root.val);
      root.children.forEach(child => traversal(child));
    }
  }
  traversal(root);
  return res;
};