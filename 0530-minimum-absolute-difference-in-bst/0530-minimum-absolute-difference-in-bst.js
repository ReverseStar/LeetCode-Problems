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
var getMinimumDifference = function(root) {
    let prevNode = null;
    let minDiff = Infinity;
    
    const inOrderTraversal = (node) => {
        if(!node) return;
        
        inOrderTraversal(node.left);
        
        if(prevNode !== null){
            minDiff = Math.min(minDiff, Math.abs(node.val - prevNode.val));
        }
        
        prevNode = node;
        
        inOrderTraversal(node.right);
    }
    
    inOrderTraversal(root);
    return minDiff;
};