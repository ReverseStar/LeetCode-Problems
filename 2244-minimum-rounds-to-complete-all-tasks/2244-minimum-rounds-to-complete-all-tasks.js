/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let freq = _.countBy(tasks);
    // console.log(freq);
    
    let vals = Object.values(freq);
    // console.log(vals, typeof(vals));
    
    let cnt = 0;
    for(val of vals){
        if(val === 1) return -1;
        else{
            cnt += Math.ceil(val/3);
            // console.log(cnt);
        }
    }
    return cnt;
};