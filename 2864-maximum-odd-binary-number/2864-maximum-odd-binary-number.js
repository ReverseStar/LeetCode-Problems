/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let cnt0 = 0;
    let cnt1 = 0;
    
    for(let i of s){
        if(i === '1') cnt1++;
        if(i === '0') cnt0++;
    }
    
    return '1'.repeat(cnt1 - 1) + '0'.repeat(cnt0) + '1';
};
