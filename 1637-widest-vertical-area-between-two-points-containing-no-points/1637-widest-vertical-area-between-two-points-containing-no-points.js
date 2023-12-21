/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let res = 0;
    let sorted = points.sort((a,b) => a[0] - b[0]);
    // console.log(sorted);
    
    for(let i=0; i<sorted.length - 1; i++){
        res = Math.max(res, sorted[i+1][0] - sorted[i][0])
    }
    
    return res;
};