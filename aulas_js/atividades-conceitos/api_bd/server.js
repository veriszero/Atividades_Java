const http = require ('node:http');

http
    .createServer((request,response)=>{
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({
            data: 'Hello World!'
        }));
    })
    .listen(3001, ()=>console.log('servidor esta rodando na porta 3001'));
    