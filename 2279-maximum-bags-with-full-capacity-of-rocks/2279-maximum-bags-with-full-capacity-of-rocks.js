/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let dist = capacity.map((item, i) => {
        return item - rocks[i];
    })
    // console.log(dist);
    let sorted = dist.sort((a,b) => a - b);
    
    let cnt = 0;
    for(let i=0; i<sorted.length; i++){

        if(additionalRocks >= sorted[i]){
            additionalRocks -= sorted[i];
            cnt++;
        }
    }
    // console.log(cnt);
    return cnt;
};