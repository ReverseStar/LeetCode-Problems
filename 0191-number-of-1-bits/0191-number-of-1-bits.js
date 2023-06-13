/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let cnt = 0;
    let bits = n.toString(2).split('');
    console.log(bits);
    bits.forEach(bit => {
        if(bit === '1') {
            cnt++;
        }
    })
    return cnt;
};