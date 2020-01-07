"use strict";

const http2 = require('http2');
const fs = require('fs');


const server = http2.createSecureServer({
  key: fs.readFileSync('./ssl/localhost-privkey.pem'),
  cert: fs.readFileSync('./ssl/localhost-cert.pem')
});

server.on('error', error => {
  console.error(error);
});

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1> hi, there. HTTP2! </h1>');
});

server.listen(8843, () => {
  console.log('the http2 server is running on port 8843.');
});
