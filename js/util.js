function getNumber(max = 25, min = 1) {
  if (max < min) {
    const mid = max;
    min = max;
    min = mid;
  }
  return Math.floor(Math.random() * (max - min) + min);
}

function checkLength(checkedString, maxLength) {
  if (checkedString.length <=  maxLength) {
    return true;
  }
  return false;
}


const getElementFromArray = function (array) {
  return array[getNumber(array.length - 1, 0)];
};

export {getNumber, getElementFromArray, checkLength};
