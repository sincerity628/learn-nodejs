const object = {
  name: 'functions',
  get: () => {
    console.log('get');
  },
  set: () => {
    console.warn('set');
  }
};

console.dir(object);
// { name: 'functions', get: [Function: get], set: [Function: set] }
