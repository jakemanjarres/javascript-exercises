var sumAll = function(firstInt, secondInt) {
  var sum = 0;

  //Check that both passed arguments are of type 'number'
  if(typeof firstInt === 'number' && typeof secondInt === 'number'){
    //If both numbers are the same, just add them together
    if(firstInt === secondInt) {
      return firstInt + secondInt;
    }
    //Check for negative int arguments
    if(firstInt < 0 || secondInt < 0){
      return "ERROR";
    }
    //If the first int is bigger, count up from second int and sum
    if(firstInt > secondInt){
      for(var i = secondInt; i <= firstInt; i++){
        sum += i;
      }
      return sum;
    }
    //If the second int is bigger, count up from first int and sum
    if(secondInt > firstInt){
      for(var i = firstInt; i <= secondInt; i++){
        sum += i;
      }
      return sum;
    }
  } else{
    //Returns error if one of the arguments is not a true number.
    return "ERROR"
  }
}

module.exports = sumAll
