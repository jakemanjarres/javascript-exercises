var leapYears = function(year) {
  var isLeapYear = false;
  divisibleBy4 = year % 4;
  divisibleBy100 = year % 100;
  divisibleBy400 = year % 400;

  if(divisibleBy4 == 0){
    isLeapYear = true;
    if(divisibleBy100 == 0){
      isLeapYear = false;
      if(divisibleBy400 == 0){
        isLeapYear = true;
      }
    }
  }
  return isLeapYear;
}

module.exports = leapYears
