const http = require('http');

let reqData = '';

http.request({
  'host': '127.0.0.1',
  'port': '8080',
  'method': 'get'
}, res => {

  res.on('data', (chunk) => {
    reqData += chunk;
  });

  res.on('end', () => {
    console.log(reqData);
  })
}).end();

// run nodeServer.js & nodeClient.js
