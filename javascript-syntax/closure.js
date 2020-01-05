let str = 'speechless';

function copy() {
  let str1 = str;
  console.log(str1);
}

copy();
// speechless

console.log(str1);
// undefined

function out() {
  let str2 = 'outside';
  return function() {
    return 'inside ' + str2;
  };
};

console.log(out()());
// inside outside
