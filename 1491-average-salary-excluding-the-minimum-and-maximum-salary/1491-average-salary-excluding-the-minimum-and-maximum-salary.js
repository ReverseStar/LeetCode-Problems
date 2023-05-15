/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let mx = Math.max(...salary);
    let mn = Math.min(...salary);
    // console.log(mx, mn);
    
    return (salary.reduce((acc,curr) => acc + curr, 0) - (mx + mn)) / (salary.length - 2);
};