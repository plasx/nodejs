var express = require('express');
var http = require('http');

http.createServer(function (request, response) {
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify(request.headers));
        response.end();
        console.log(request);
}).listen(8000);

var app = express();


app.get('/json/', function(request, response) {
    response.json({
        name: 'Daniel Rivera',
        food: 'Pizza',
        videogame: 'mvc1'
    });
});
app.get('/headers/', function(request, response) {
    response.json(request.headers);
});
app.get('/headers/:header_name', function(request, response) {
    var headerName = request.params.header_name;
    response.send(headerName);
});
app.get('/version', function(request, response) {
     response.json(request.httpVersion);
});


app.listen(8081);