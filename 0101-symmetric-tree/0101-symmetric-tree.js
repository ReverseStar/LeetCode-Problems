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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    const DFS = (left, right) => {
        if(!left && !right) return true;
        if(!left || !right) return false;
        
        return (left.val === right.val && DFS(left.left, right.right) && DFS(left.right, right.left));
    }
    
    return DFS(root.left, root.right);
};

//Neetcode Explanation