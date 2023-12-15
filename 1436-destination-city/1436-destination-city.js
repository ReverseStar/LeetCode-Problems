/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let s = new Set();
    
    for(let p of paths){
        s.add(p[0]);
    }
    
    for(let p of paths){
        if(!s.has(p[1])){
            return p[1];
        }
    }
};