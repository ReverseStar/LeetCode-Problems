/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    
    for(let i=0; i<numRows; i++) {
        let row = [];
        for(let j=0; j<=i; j++){
            if(j===0 || j===i) {
                row.push(1);
            } else {
                row.push(res[i-1][j] + res[i-1][j-1]);
            }
        }
        res.push(row);
    }
    return res;
};

    // let res = [];
    // for(let i=0;i<numRows;i++){
    //     let temp=[];
    //     for(let j=0;j<=i;j++){
    //         if(j==0 || j==i){
    //             temp.push(1);
    //         }else{
    //             temp.push(res[i-1][j]+res[i-1][j-1]);
    //         }
    //     }
    //     res.push(temp);
    // };
    // return res;
