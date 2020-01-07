"use strict";

const http2 = require('http2');
const fs = require('fs');

const client = http2.connect('https://localhost:8843', {
  ca: fs.readFileSync('./ssl/localhost-cert.pem')
});

client.on('error', error => {
  console.error(error);
});

const request = client.request({ ':path': '/' });

request.setEncoding('utf8');

let data = '';

request.on('data', chunk => {
  data += chunk;
});

request.on('end', () => {
  console.log(data);
  client.close();
});

request.end();
