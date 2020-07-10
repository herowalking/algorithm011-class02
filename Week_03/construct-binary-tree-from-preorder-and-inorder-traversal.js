/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let recursion = function(start, end) {
    if (start > end) return null;

    let val = preorder.shift();
    let root = new TreeNode(val);
    root.left = recursion(start, inorder.indexOf(val) - 1);
    root.right = recursion(inorder.indexOf(val) + 1, end);
    
    return root;
  }
  return recursion(0, inorder.length - 1);
};