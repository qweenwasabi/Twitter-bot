var express = require('express');
var app = express();


app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render(
    'index',
    { title: 'stream', message: 'Twitter Feed'});
});

app.listen(3000, function () {
  console.log('working');
});
