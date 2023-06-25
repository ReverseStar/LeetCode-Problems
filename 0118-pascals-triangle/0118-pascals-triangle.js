/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]];
    
    for(let i=1; i<numRows; i++) {
        let row = [];
        for(let j=0; j<=i; j++){
            row.push((res[i-1][j-1] || 0) + (res[i-1][j] || 0));
        }
        res.push(row);
    }
    return res;
};

