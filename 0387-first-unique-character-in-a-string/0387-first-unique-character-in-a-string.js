                                                                                                        /**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freq = {};
    let res;
    for(let i of s){
        freq[i] = (freq[i] || 0) + 1;
    }
    let en = Object.entries(freq);
    
    for(let i in freq){
        if(freq[i] === 1){
            res = i;
            break
        }
    }
    return s.indexOf(res);
};