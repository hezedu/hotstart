# hotstart
nodejs http seaver  hot start ! Now , it's a  __express__  middlewares.
## install
`npm install hotstart --save`
# warn
## Don't use the app.listen  in the app.js.
# conf
if you 
```javascript
var express = require('express');
var app = express();
var hotstart = require('hotstart');

app.use(hotstart({
  dir: __dirname,  //must
  handle: '/app.js',  //def the app.js
  ignore:['/public','/node_modules'], //def ignore dir.  if view cache ===false, then will auto push view path .
  suffix:['.js'],  //def suffix Filter.  if view cache ===true, then will auto push view engine .
  route: '/hotstart', //def  　a simple web views．
  tpl: 'jade',  //tpl engine cache. EJS jade only supports .
}, app));
```
#other api 
difflist and all cechelist.
```javascript
hotstart.diffList(function(difflist,cechelist){
console.log(difflist);
console.log(cechelist);
}
```
cache update
```javascript
hotstart.up(req);
//or
hotstart.up(server,true); //the server like the bin/www server.
```
