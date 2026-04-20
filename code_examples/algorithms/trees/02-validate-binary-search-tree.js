/**
 * Validate Binary Search Tree
 * Time: O(n), Space: O(h)
 */
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isValidBST(root) {
  function dfs(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }
  return dfs(root, -Infinity, Infinity);
}

const ok = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const bad = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));

console.log(isValidBST(ok)); // true
console.log(isValidBST(bad)); // false
