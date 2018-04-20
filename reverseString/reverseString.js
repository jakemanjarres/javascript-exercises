var reverseString = function(stringToReverse) {
  if(stringToReverse === ''){
    return '';
  }
  var stringArray = stringToReverse.split("")
  var reversedArray = [];

  for(var i = 0; i < stringToReverse.length; i++){
    reversedArray[i] = stringArray.pop();
  }

  return reversedArray.join('');

}

module.exports = reverseString
