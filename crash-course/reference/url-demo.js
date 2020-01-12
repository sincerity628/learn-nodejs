const url = require('url');

const myUrl = new URL('http://mylittlespace.com:8080/hey.html?id=628&ststus=active');

console.log(myUrl);
// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());
// host (root domain)
console.log(myUrl.host);
// hostname (does not have port)
console.log(myUrl.hostname);
// pathname
console.log(myUrl.pathname);
// search params
console.log(myUrl.search);
// search params obj
console.log(myUrl.searchParams);
// append params
myUrl.searchParams.append('xsy', '123');
console.log(myUrl.searchParams);
// loop through the params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
