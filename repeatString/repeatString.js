var repeatString = function(string, repetitions) {
  var stringProduct = '';
  if(repetitions < 0){
    return "ERROR";
  }
  if(repetitions === 0){
    return stringProduct;
  }

  for(var i = 0; i < repetitions; i++){
  stringProduct += string;
 }
 return stringProduct;
}

module.exports = repeatString
