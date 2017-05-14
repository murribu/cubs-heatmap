var express = require('express');
var path = require('path');
var rp  = require('request-promise');
var app = express();
var port = 8082;

app.listen(port);

app.get('/', function(req, res){
    res.sendfile(path.join(__dirname + '/index.html'));
});
app.get('/lester.json', function(req, res){
    var url = 'https://s3.amazonaws.com/cory-martin-cubs/lester.json';
    rp(url).then(response => {
        res.send(response);
    }, response => {
        res.json({'error':'failed to load json'})
    })
});

console.log('Cory Martin\'s project for the Cubs started on port ' + port);