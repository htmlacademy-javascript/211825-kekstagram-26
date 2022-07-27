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


function getElementFromArray(array) {
  return array[getNumber(array.length - 1, 0)];
}

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

export {getNumber, getElementFromArray, checkLength, isEscapeKey};
