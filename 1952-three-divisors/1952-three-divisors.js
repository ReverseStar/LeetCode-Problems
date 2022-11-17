/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let cnt = 0;
    
    for(let i=1;i<=n;i++){
        if(n % i === 0){
            cnt++;
        }
    }
    // console.log(cnt)
    return cnt === 3
};