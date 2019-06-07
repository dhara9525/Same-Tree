// Simple recursive javascript JS solution, faster than 96.41% of JavaScript online submissions for Same Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) 
{
    if(!p && !q)
        return true;
    
    return ((p!=null &&q!=null) && (p.val == q.val) && isSameTree(p.left,q.left) && isSameTree(p.right,q.right)  );
        
};