console.time('total time');

console.time('time1');
for(let i = 0; i < 10000; i++) {}
console.timeEnd('time1');
// time1: 0.469ms

console.time('time2');
for(let i = 0; i < 100000; i++) {}
console.timeEnd('time2');
// time2: 4.507ms

console.timeEnd('total time');
// total time: 21.406ms
