/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let arr = [];
    for(let i=1;i<num;i++){
        if(num % i === 0){
            arr.push(i);
        }
    }
    // console.log(arr,num)
    let sum = arr.reduce((acc,curr) => {
        return acc + curr;
    },0)
    // console.log(sum,num)
    if(sum !== num) return false;
    else{
        return true;
    }
};