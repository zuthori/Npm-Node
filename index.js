'use strict';

const http = require('http'),
	port = process.env.PORT;

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Testando');
});

server.listen(port,()=>{
  console.log(`Server running...`);
});
