const http = require('http');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

const server = http.createServer((req, res) => {
  // if(req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, content) => {
  //     if(err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content);
  //   });
  // } else if(req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content);
  //   });
  // } else if(req.url === '/api/users') {
  //   // fetch data from DB
  //   // hard code...
  //   const users = [
  //     { id: uuid.v1(), name: 'becca', age: 20 },
  //     { id: uuid.v1(), name: 'fei', age: 20 },
  //     { id: uuid.v1(), name: 'jasmine', age: 19 },
  //     { id: uuid.v1(), name: 'yu', age: 20 }
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }
  const filePath = path.join(
    __dirname,
    'public',
    req.url === "/" ? 'home.html' : req.url
  );

  const extentionName = path.extname(filePath);

  //default
  let contentType = 'text/html';

  switch(extentionName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
    case '.jpg':
      contentType = 'image/jog';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code === 'ENOENT') {
        // page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        )
      } else {
        // server error
        res.writeHead(500);
        res.end(`The server with some error: ${err.code}`);
      }
    } else {
      // success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`the server is running on port ${PORT}.`));
