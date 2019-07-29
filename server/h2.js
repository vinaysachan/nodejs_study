const http = require('http');

const req_res = require('./routes/serverHandle');

console.log('H2 Page');

const server = http.createServer(req_res);

server.listen(3000);



//Path :- 
//1 ==> './___path___' (same place)
//2 ==> '/__path__' ()  