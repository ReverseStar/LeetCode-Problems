/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = _.countBy(nums);
    console.log(count);
    let res = 0;
    for(let [key,value] of Object.entries(count)){
        let val = value;
        if(val === 1) return -1;
        res += Math.ceil(val/3);
    }
    return res;
};