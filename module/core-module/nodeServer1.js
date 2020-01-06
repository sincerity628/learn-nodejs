const http = require('http');

const server = new http.Server();

server.on('request', (req, res) => {
  res.writeHead(200, { 'contentType': 'text/plain' });
  res.end('Hello, node.js');
});

server.listen(8080, () => {
  console.log('the server is running on port 8080.');
});
