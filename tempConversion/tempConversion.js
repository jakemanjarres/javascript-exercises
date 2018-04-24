var ftoc = function(temperature) {
  var conversion = (temperature - 32) * 5/9;
  return Math.round(conversion*10)/10;
}

var ctof = function(temperature) {
  var conversion = temperature * 9/5 + 32;
  return Math.round(conversion*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
