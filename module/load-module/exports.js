const utility = {
  noRepeat: (array) => {
    return array.filter((element, index) => {
      return array.indexOf(element) === index;
    })
  },
  add: (array) => {
    return array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    })
  }
};

module.exports = utility;
