const url = require('url');

let urlObj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.google.com',
  port: null,
  hostname: 'www.google.com',
  hash: null,
  search: '?q=node.js',
  query: 'q=node.js',
  pathname: '/',
  path: '/?q=node.js',
  href: 'https://www.google.com/?q=node.js'
};

let urlAddress = url.format(urlObj);

console.log(urlAddress);
// https://www.google.com/?q=node.js
