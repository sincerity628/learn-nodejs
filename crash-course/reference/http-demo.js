const http = require('http');

// create a server object
http.createServer((req, res) => {
  res.write('hello from becca.');
  res.end();
}).listen(8080, () => console.log('the port is running on port 8080.'));
