/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let cnt = 0;
    let arr = [];
    
    grid.forEach(gr => {
        gr.filter(g => {
            if(g < 0){
                arr.push(g);
            }
        })
    })
    
    // console.log(arr);
    return arr.length;
};