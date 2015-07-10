var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var testfn = require('./testfn');


console.log('test');



module.exports = function(time){
  console.log('sssssss')
  return function(req,res,next){
    res.send('<h1 >'+testfn.fn('OK')+':'+time+'</h1>'+'<h2>'+testfn.time+'</h1>')
  }

};
