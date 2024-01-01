/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    
    let i = 0;
    let j = 0;
    
    while(i < g.length){
        while(j < s.length && g[i] > s[j]){
            j++;
        }
        if(j === s.length) break;
        i++;
        j++;
    }
    return i;
};