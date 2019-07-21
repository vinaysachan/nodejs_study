const http = require('http');

const server = http.createServer((request, response) => {
    // console.log(request);
    console.log(request.url, request.method, request.headers); 
    // process.exit();

    if(request.url =='/abc') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>My First Page</title></head>');
        response.write('<body><h1>Hello from Noida</h1></body>');
        response.write('</html>');
        response.end();
    } else if(request.url == '/abcd' & request.method == 'POST') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>My First Page</title></head>');
        response.write('<body><h1>Hello from Delhi</h1></body>');
        response.write('</html>');
        response.end();
    } else {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>My First Page</title></head>');
        response.write('<body><h1>Hello from gurgaon</h1></body>');
        response.write('</html>');
        response.end();
    }


 
});

server.listen(2000);