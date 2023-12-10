/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    
    //creating matrix by filling with 0
    let res = new Array(col).fill(0).map(() => new Array(row).fill(0));
    // console.log(res);
    
    for(let r=0; r<row; r++){
        for(let c=0; c<col; c++){
            res[c][r] = matrix[r][c]; //placing row in col and col in row
        }
    }
    
    return res;
};

//complexity O(n * m); 