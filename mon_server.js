let http =require('http');
let fs = require('fs')
// let dt=require('./my_first_module.js')
http.createServer((request, response)=>{
    fs.readFile('./index.html',function(err, data){
        response.writeHead(200,{'content-type' : 'text/html'});
        response.write(`${data}`);
        response.write('hello I\'m WassCodeur server' /*+ dt.MyModule()*/);
        
        response.end();
    })

}).listen(1000);