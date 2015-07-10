
var m = require('./m');

exports.fn = function(str){
  return str+" +@"+m.a+" "+str;
};

exports.time = Date.now();

console.log(exports.time);