// http.IncomingMessage
const http = require('http');

const server = new http.Server();

server.on('request', (req, res) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    let method = req.method;
    let headers = JSON.stringify(req.headers);
    let url = req.url;
    let httpVersion = req.httpVersion;

    res.writeHead(200, { 'contentType': 'text/plain' });

    let dataHtml = '<p>data: ' + data + '</p>';
    let methodHtml = '<p>method: ' + method + '</p>';
    let urlHtml = '<p>url: ' + url + '</p>';
    let httpVersionHtml = '<p>httpVersion: ' + httpVersion + '</p>';
    let headersHtml = '<p>headers: ' + headers + '</p>';

    let resData = dataHtml + methodHtml + urlHtml + httpVersionHtml + headersHtml;

    res.end(resData);
  });
});

server.listen(3000, () => {
  console.log('the server is running on port 3000.');
});
