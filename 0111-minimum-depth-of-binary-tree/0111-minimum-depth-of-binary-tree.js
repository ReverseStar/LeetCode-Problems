/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) { 
    const DFS = (node) => {
        if(!node) return 0;
        if(!node.left) return 1 + DFS(node.right);
        if(!node.right) return 1 + DFS(node.left);
        
        return 1 + Math.min(DFS(node.left), DFS(node.right));
    }
    return DFS(root);
};