/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let num1 = [...new Set(nums1)];
    let num2 = [...new Set(nums2)];
    let num3 = [...new Set(nums3)];
    // console.log(num1, num2, num3);
    let mx = Math.max(num1.length, num2.length, num3.length);
    let cnt = 0;
    let arr = [];
    
    let aaa = [...num1, ...num2, ...num3];
    let aa = _.countBy(aaa);
    
    // console.log(aa,typeof(aa));
    
    let keys = Object.keys(aa);
    // console.log(keys);
    
    keys.forEach(key => {
        if(aa[key] >= 2){
            arr.push(key)
        }
    })
    // console.log(arr);
    return arr;
};