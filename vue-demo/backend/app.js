var express = require('express');
var app = express();
app.use(express.static('./static'));
app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.send('Hello World!');
});

var server = app.listen(3000,'192.168.1.131' ,function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});