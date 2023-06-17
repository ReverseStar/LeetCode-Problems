/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let range = [];
    
    for(let i=0; i<nums.length; i++){
        let start = nums[i];
        
        while(i+1 < nums.length && nums[i] + 1 === nums[i+1]){
            i++;
        }
        
        if(start !== nums[i]){
            range.push(start + '->' + nums[i]);
        } else {
            range.push(start.toString());
        }
    }
    
    return range;
};