/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let freq = _.countBy(nums);
    console.log(freq);
    
    for(let key in freq){
        if(freq[key] === 1){
            // console.log(key);
            return key;
        }
    }
};