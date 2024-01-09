/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let leaf1 = [];
    let leaf2 = [];
    
    function DFS(root, leaf){
        if(!root) return null;
        
        if(!root.left && !root.right){
            leaf.push(root.val);
        }
        DFS(root.left, leaf);
        DFS(root.right, leaf);
    }
    
    DFS(root1, leaf1);
    DFS(root2, leaf2);
    
    return _.isEqual(leaf1, leaf2);
};