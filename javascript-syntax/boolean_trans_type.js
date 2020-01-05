let a; //f
let b = 0; //f
let c = undefined; //f
let d = null; //f
let e = NaN; //f
let f = {
  name: 'becca'
}; // t

const array = [a, b, c, d, e, f];

for(let i = 0; i < array.length; i++) {
  console.log(Boolean(array[i]));
}

// false
// false
// false
// false
// false
// true
