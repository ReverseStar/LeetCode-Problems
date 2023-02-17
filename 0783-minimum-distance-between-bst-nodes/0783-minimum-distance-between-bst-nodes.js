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
var minDiffInBST = function(root) {
    let dist = Infinity;
    let prev = null;
    
    const DFS = (root) => {
        if(!root) return;
        
        DFS(root.left);
        
        if(prev)
            dist = Math.min(dist, root.val - prev.val);
            prev = root;
        
        DFS(root.right);
    }
    
    DFS(root);
    return dist;
};