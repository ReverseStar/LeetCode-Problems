/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = [];
    let count = {};
    
    for(let i of nums){
        count[i] = (count[i] || 0) + 1;
    }
    
    for(let i in count){
        // console.log(count[i])
        if(count[i] >= 2){
            res.push(i);
        }
    }
    
    return res;
};