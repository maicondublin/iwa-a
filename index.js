const http = require('http');

http.createServer((req, res)=>{
    res.write("Hello BSc2! \n");//write a response
    res.end();//end the response
}).listen(8000);//listen for response on port 8000
