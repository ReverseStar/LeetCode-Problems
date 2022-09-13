/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let sqrt5 = Math.sqrt(5);
    
    let binet = (((1 + sqrt5)**n) - ((1 - sqrt5)**n)) / ((2 ** n) * sqrt5);
    
    //console.log(Math.round(binet));
    return Math.round(binet);
};