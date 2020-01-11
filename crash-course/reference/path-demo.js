const path = require('path');

// file path
console.log(__filename);
// /Users/xushuangyu/Desktop/learn-nodejs/crash-course/reference/path-demo.js

// file base name
console.log(path.basename(__filename));
// path-demo.js

// directory name
console.log(path.dirname(__filename));
// /Users/xushuangyu/Desktop/learn-nodejs/crash-course/reference


// extention name
console.log(path.extname(__filename));
// .js

// create path object
console.log(path.parse(__filename));
// {
//   root: '/',
//   dir: '/Users/xushuangyu/Desktop/learn-nodejs/crash-course/reference',
//   base: 'path-demo.js',
//   ext: '.js',
//
//   name: 'path-demo'
// }

// concatenate paths
console.log(path.join(__dirname, 'learn', 'node.js'));
// /Users/xushuangyu/Desktop/learn-nodejs/crash-course/reference/learn/node.js
