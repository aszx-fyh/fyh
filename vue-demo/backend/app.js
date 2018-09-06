var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(express.static('./static'));
app.use(cookieParser());
app.use( function (req, res,next) {

  res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
  res.setHeader('Access-Control-Allow-Method','post,get,delete');
  res.setHeader('Access-Control-Allow-Credentials',true);
  res.setHeader('Access-Control-Allow-Headers','content-type');
 next();
});

app.post('/uploadImg', function (req, res) {
 console.log(req.body);
  res.send('Hello World!');
});

app.post('/MaterialApi/GetList', function (req, res) {
  console.log(req.cookies);
  res.cookie('name','fyh');
   res.send('Hello World!');
 });
 app.post('/ProgramApi/GetInfo', function (req, res) {
  console.log(req.cookies);
  res.cookie('ProgramApi','11111',{
    domain:'localhost'
  });
   res.send('Hello ProgramApi!');
 });

var server = app.listen(3000 ,'192.168.1.138',function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});