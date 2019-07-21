const http  =   require('http');
const fs        =   require('fs');
const server    =   http.createServer((req,res) => {

   const url        =   req.url;
   const method     =   req.method;
   
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   if(url === '/') {
        res.write('<head><title>Submit Form</title></head>');
        res.write('<body><form method="post" action="send"><input type="text" name="msg"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
   }  else if(url==='/send' && method === 'POST') {
       const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody); //msg="vinaysachan"
            const message = parsedBody.split('=')[1];
            
            let a = await task1 ; //10 sec
            let b = await task2 ;//5 sec  
            //15
             
            let r ;
            task1.then((a) => {  //10
                task2.then((b) => { //5
                    r =  a,b;
                });
            }) //15

            return {a,b} = await (task1, task2);  //10




            return r ;


            // fs.writeFileSync('message.txt', message); //500 mb file  - 20 sec - 2 min
            fs.writeFile('message.txt', message, (err) => {
                if(err) {
                    //Error occuse //
                } else {
                    res.statusCode = 302;
                    res.setHeader('Location', '/'); 
                    return res.end();
                }
            });
        });
    //    fs.writeFileSync('message.txt', 'vdsjkhghsakuad asd asd'); 
       // res.writeHead(302, {});
    //    res.statusCode = 302;
    //    res.setHeader('Location', '/');
    //    return res.end();
   } else {
       res.write('<head><title>My First Page</title></head>'); res.write('<body><h1>Hello from gurgaon</h1></body>'); res.write('</html>'); res.end();
   }
});  

server.listen(2000);
