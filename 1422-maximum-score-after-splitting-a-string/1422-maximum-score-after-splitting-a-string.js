/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let zero = 0;
    let one = [...s].filter(x => x === '1').length;
    let res = 0;
    
    for(let i=0; i<s.length - 1; i++){
        if(s[i] === '0'){
            zero++;
        } else {
            one--;
        }
        
        res = Math.max(res, zero + one)
    }
    console.log(res);
    return res;
};
// "011101"