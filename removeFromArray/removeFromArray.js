var removeFromArray = function(array) {
  //Create an array of the arguments passed to the function
  var args = [...arguments];
    //If no removal arguments are passed to the function, return message saying so
    if(args.length === 1){
      return "No removal arguments passed to function.";
    } else{
      //Remove the array object from the array of arguments
      args.shift();
      //Loop through the passed array, and remove items specified by removal arguments
      for(var i = 0; i < args.length; i++){
        for(var y = 0; y < array.length; y++){
          if(array[y] === args[i]){
            array.splice(y , 1);
          }
        }
      }
      return array;
    }
}

module.exports = removeFromArray
