/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let freq = _.countBy(s);
    //console.log(Object.values(freq));
    let vals = Object.values(freq);
    
    let ans = [...new Set(vals)];
    //console.log(ans)
    if (ans.length !== 1) return false;
    else return true;
};