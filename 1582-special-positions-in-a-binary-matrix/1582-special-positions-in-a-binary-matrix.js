/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let res = 0;
    let len = mat[0].length;
    
    for(let row=0; row<mat.length; row++){
        for(let col=0; col<len; col++){
            if(mat[row][col] === 0){
                continue;
            }
            
            let isValid = true;
            
            //check Row for if there's more 1
            for(let r=0; r<mat.length; r++){
                if(r !== row && mat[r][col] === 1){
                    isValid = false;
                    break;
                }
            }
            
            //check Column for if there's more 1
            for(let c=0; c<len; c++){
                if(c !== col && mat[row][c] === 1){
                    isValid = false;
                    break;
                }
            }
            
            if(isValid){
                res++;
            }
        }
    }
    
    return res;
};
