/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    // let arr = [];
    let ans = nums.filter(isUnique);
    // console.log(ans);
    const arr = ans.reduce((acc,curr) => {
        return acc+curr;
    },0)

    return arr;
};

const isUnique = (value, index, array) => {
    return array.indexOf(value) === array.lastIndexOf(value);
}