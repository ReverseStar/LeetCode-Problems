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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
    
    const getTree = (node) => {
        if(node === null) return node;
        
        getTree(node.left) 
        arr.push(node.val);
        getTree(node.right) 
    }
    
    getTree(root);
    return arr;
};