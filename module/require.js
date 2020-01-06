const arrayFunction = require('./exports');

const array = [1, 2, 3, 3, 4, 1, 2, 3];

let noRepeatArray = arrayFunction.noRepeat(array);

let sum = arrayFunction.add(array);

console.log(noRepeatArray);
// [ 1, 2, 3, 4 ]

console.log(sum);
// 19
