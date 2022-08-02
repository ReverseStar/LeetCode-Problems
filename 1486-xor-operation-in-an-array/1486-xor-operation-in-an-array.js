/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = [];
    let ans = 0;
    for(let i=0; i<n; i++){
        arr.push(start);
        start += 2;
    }
    for(let i=0;i<arr.length;i++){
        ans ^= arr[i]
    }
    console.log(ans);
    return ans;
};