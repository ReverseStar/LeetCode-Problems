/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let incoming = new Array(n+1).fill(0);
    let outgoing = new Array(n+1).fill(0);
    
    //   [[1,2]]
    for(let i of trust){
        outgoing[i[0]]++;
        incoming[i[1]]++;
    }
    
    for(let i=1; i<=n; i++){
        if(outgoing[i] === 0 && incoming[i] === n-1){
            return i;
        }
    }

    return -1;
};