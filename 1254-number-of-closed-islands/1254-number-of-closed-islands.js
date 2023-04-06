/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let ROW = grid.length;
    let COLS = grid[0].length;
    let cnt = 0;
    
    const DFS = (grid, r, c) => {
        if(r >= ROW || r < 0 || c >= COLS || c < 0){ //it's out of bounds
            return false;
        }
        
        if(grid[r][c] === 1){
            return true;
        }
        
        grid[r][c] = 1;
        
        let check_left = DFS(grid, r, c-1);
        let check_right = DFS(grid, r, c+1);
        let check_top = DFS(grid, r-1, c);
        let check_bottom = DFS(grid, r+1, c);
        
        return check_left && check_right && check_top && check_bottom;
    }
    
    for(let i=0; i<ROW; i++){
        for(let j=0; j<COLS; j++){
            if(grid[i][j] === 0){
                if(DFS(grid, i, j) === true){
                    cnt++;
                }
            }
        }
    }
    return cnt;
};