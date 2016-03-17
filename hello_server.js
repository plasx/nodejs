var express = require('express');

var app = express();


app.get('/json/', function(request, response) {
    response.json({
        name: 'Daniel Rivera',
        food: 'Pizza'
    });
});

app.listen(8080);