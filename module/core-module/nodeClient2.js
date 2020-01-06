const http = require('http');

let reqData = '';
let options = {
  'host': '127.0.0.1',
  'port': '8080',
  'method': 'get'
};

const req = http.request(options);

req.on('response', (res) => {
  res.on('data', (chunk) => {
    reqData += chunk;
  });

  res.on('end', () => {
    console.log(reqData);
  });
});
