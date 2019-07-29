const http = require('http');
const express = require('express');
const app = express();

app.get('/',function(req,res) {
    res.send('Hello World!');
});

const vinay = (req,res) =>  {
    res.send('Hello Vinay!');
}

app.get('/vinay', vinay);

app.post('/message', (req,res) =>  {
    res.send('Hello Vinay!');
});


var server=app.listen(2000,function() {});


//params + express-validation + file(html) + body_parser