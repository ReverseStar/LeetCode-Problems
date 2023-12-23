/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let hashset = new Set();
    let x = 0;
    let y = 0;
    hashset.add(`${x},${y}`);
    
    for(let dir of path){
        if(dir === 'N') y++;
        else if(dir === 'S') y--;
        else if(dir === 'E') x++;
        else x--;
        
        let point = `${x},${y}`;
        if(hashset.has(point)){
            return true;
        } else {
            hashset.add(point);
        }
    }
    return false;
};

/*
    direction 
        N
    W --|-- S 
        E
        
*/