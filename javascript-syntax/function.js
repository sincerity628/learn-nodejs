function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

let a = add(2, 3, 5, 6);

let b = add(6, 2, 8, 5, 1, 2);

console.log(a);
// 16

console.log(b);
// 24

// 函数重载
function operate() {
  let sum = 0;
  console.log(arguments);
  // [Arguments] { '0': 3, '1': 4 }
  if(arguments.length === 2) {
    sum = arguments[0] * arguments[1];
    return sum;
  }
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

let c = operate(3, 4);

let d = operate(6, 2, 8);

console.log(c);
// 12

console.log(d);
// 16
