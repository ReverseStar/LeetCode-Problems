/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
   // Shoelace Formula
    let len = coordinates.length;
    
    // if(len <= 2 ) return true;
    
    for(let i=0; i<len - 2; i++){
        let [x1,y1] = coordinates[i];
        let [x2,y2] = coordinates[i+1];
        let [x3,y3] = coordinates[i+2];
        
        //Applying the Shoelace Formula
        // (1/2 *((x1*y2 + x2*y3 + x3*y1)-(y1*x2 + y2*x3 + y3*x1))
                   // Math.abs(1/2 * ((x1*y2 + x2*y3 + x3*y1) - (y1*x2 + y2*x3 + y3*x1)));
        let area = Math.abs(0.5 * ((x1*y2 + x2*y3 + x3*y1) - (y1*x2 + y2*x3 + y3*x1)));
        // console.log(area);
        if(area > 0) return false;
    }
    return true;
};