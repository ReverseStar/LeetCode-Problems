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
    console.log(num1,num2,num3);
    let arr = [];
    let aaa = [...num1, ...num2, ...num3];
    let aa = _.countBy(aaa);
    
    let keys = Object.keys(aa);
    keys.forEach(key => {
        if(aa[key] >= 2){
            arr.push(key)
        }
    })
    return arr;
};