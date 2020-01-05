let a;
let b = 6;
let c = 'becca';
let d = true;
let e = () => {
  console.log('hey');
};
let f = {
  name: 'becca',
  age: 20
};
let g = null; // 空对象指针

let array = [a, b, c, d, e, f, g];

for(let i = 0; i < array.length; i++) {
  console.log(typeof(array[i]));
}

// undefined
// number
// string
// boolean
// function
// object
// object
