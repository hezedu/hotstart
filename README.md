# hotstart
nodejs http seaver  hot start ! Now , it's a  __express__  middlewares.
## install
`npm install hotstart --save`
# warn
___Don't use the app.listen  in the app.js.___
# conf
```javascript
var express = require('express');
var app = express();
var hotstart = require('hotstart');

app.use(hotstart({
  dir: __dirname,  //must
  handle: '/app.js',  // app.js
  ignore:['/public','/node_modules'], //ignore dir . if view cache is false, then will push view path
  suffix:['.js'],  //suffix Filter. if view cache is true, then will push view engine
  route: '/hotstart', //a simple web route
  tpl: 'jade',  //tpl engine cache clear. EJS jade only supports
}, app));

//Simple conf.if you used executable's express to create your app.you only set:
app.use(hotstart({dir:__dirname, tpl:'jade'},app));
```
Start you server, And then change something, open it in the browser.like: `http://127.0.0.1:3000/hotstart`

#other api 
find the difflist and all cechelist.
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
