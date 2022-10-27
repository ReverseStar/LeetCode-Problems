/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let lcnt = 0;
    let rcnt = 0;
    let cnt = 0;
    
    // s.split('').forEach(item => 
    for(let i=0;i<s.length;i++){
        if(s[i] === 'R') rcnt++;
        if(s[i] === 'L') lcnt++;
        if(rcnt === lcnt) cnt++;
    }
    console.log(cnt);
    return cnt;
};