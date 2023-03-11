/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let sorted = nums.sort((a,b) => a-b);
    console.log(sorted);
    let res = [];
    
    for(let i=0; i<sorted.length; i++){
        if(sorted[i] > target) break;
        if(sorted[i] === target) res.push(i);
    }
    
    return res;
};

