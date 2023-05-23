const leapYears = function(years) {
    if(years % 100 === 0 && years % 400 !== 0) {return false}
    if(years % 4 === 0) {return true}
    else {return false};
};

// Do not edit below this line
module.exports = leapYears;
