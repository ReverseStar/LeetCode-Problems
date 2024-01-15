/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let lost = {};
    let res = [[], []];
    
    for(let [winner,loser] of matches){
        lost[winner] = (lost[winner] || 0);
        lost[loser] = (lost[loser] || 0) + 1;
    }
    
    // console.log(lost)
    // The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties. -MDN
    for(let player in  lost){
        if(lost[player] === 0){
            res[0].push(player)
        }
        if(lost[player] === 1){
            res[1].push(player)
        }
    }
    // console.log(res);
    return res;
};