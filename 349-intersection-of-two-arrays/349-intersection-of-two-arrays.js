/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = [];
    
    let n1 = [...new Set(nums1)];
    let n2 = [...new Set(nums2)];
    
    n1.forEach(n => {
        if(n2.includes(n)){
            arr.push(n)
        }
    })
    
    console.log(arr);
    return arr;
};
