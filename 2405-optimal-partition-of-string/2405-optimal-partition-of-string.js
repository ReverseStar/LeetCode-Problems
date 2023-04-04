/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let set = new Set();
    let cnt = 1;
    
    for(ch of s){
        if(set.has(ch)){
            cnt++;
            set = new Set();
        }
        set.add(ch);
    }
    return cnt;
};