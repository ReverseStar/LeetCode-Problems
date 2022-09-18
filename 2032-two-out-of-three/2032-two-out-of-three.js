/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let num = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];
    let arr = [];
    let unq = _.countBy(num);
    
    let keys = Object.keys(unq);
    keys.forEach(key => {
        if(unq[key] >= 2){
            arr.push(key)
        }
    })
    return arr;
};