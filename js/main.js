function getNumber(max = 10, min = 0) {
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

getNumber();
checkLength();
