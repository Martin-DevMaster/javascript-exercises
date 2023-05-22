const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {return 'ERROR'}
    if(a < 0 || b < 0 ) {return 'ERROR'}
    if(Array.isArray(a) || Array.isArray(b)){return 'ERROR'}
    return (Math.abs(a-b) + 1)*(a + b)/2;
 };
 

// Do not edit below this line
module.exports = sumAll;
