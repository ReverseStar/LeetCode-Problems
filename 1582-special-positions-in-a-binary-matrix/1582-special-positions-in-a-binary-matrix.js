/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let res = 0;
    let m = mat.length;
    let n = mat[0].length;
    
    let rowCnt = new Array(m).fill(0);
    let colCnt = new Array(n).fill(0);
    
    for(let row=0; row<m; row++){
        for(let col=0; col<n; col++){
            if(mat[row][col] === 1){
                rowCnt[row]++;
                colCnt[col]++;
            }
        }
    }
    
    for(let row=0; row<m; row++){
        for(let col=0; col<n; col++){
            if(mat[row][col] === 1 && rowCnt[row] === 1 && colCnt[col] === 1){
                res++;
            }
        }
    }
    return res;
};
