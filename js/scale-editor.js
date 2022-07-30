const scaleValue = document.querySelector('.scale__control--value');
scaleValue.readonly = 'readonly';
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
scaleBiggerButton.disabled = true;
let scaleNumber = 100;
const innerImage = document.querySelector('.img-upload__preview');

// function setScale() {

// }

scaleValue.value = `${scaleNumber}%`;
// console.log(scaleValue.value);

function onScaleSmallerButtonClick() {
  scaleNumber = scaleNumber - 25;
  scaleValue.value = `${scaleNumber}%`;
  innerImage.style.transform = `scale(${scaleNumber / 100})`;
  if (scaleNumber === 25) {
    scaleSmallerButton.disabled = true;
    scaleBiggerButton.disabled = false;
  }
  scaleBiggerButton.disabled = false;
  // console.log(scaleValue.value);
}

scaleSmallerButton.addEventListener('click', onScaleSmallerButtonClick);

function onScaleBiggerButtonClick() {
  scaleNumber = scaleNumber + 25;
  scaleValue.value = `${scaleNumber}%`;
  innerImage.style.transform = `scale(${scaleNumber / 100})`;
  if (scaleNumber === 100) {
    scaleBiggerButton.disabled = true;
    scaleSmallerButton.disabled = false;
  }
  scaleSmallerButton.disabled = false;
  // console.log(scaleValue.value);
}

scaleBiggerButton.addEventListener('click', onScaleBiggerButtonClick);


