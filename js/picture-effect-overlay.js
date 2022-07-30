const effectsRadioButtons = document.querySelectorAll('.effects__radio');
const effectsList =  document.querySelector('.effects__list');
const innerImage = document.querySelector('.img-upload__preview');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue =  document.querySelector('.effect-level__value');

innerImage.style.filter = `grayscale(${effectLevelValue.value})`;

const оverlayEffects = {
  chrome: innerImage.style.filter = `grayscale(${effectLevelValue.value})`,
  sepia: innerImage.style.filter = `sepia(${effectLevelValue.value})`,
  marvin: innerImage.style.filter = `invert(${effectLevelValue.value}%)`,
  phobos: innerImage.style.filter = `blur(${effectLevelValue.value}px)`,
  heat: innerImage.style.filter = `brightness(${effectLevelValue.value})`,
};

effectsRadioButtons[0].checked = 'true';
innerImage.style.removeProperty('filter');
effectLevelSlider.classList.add('hidden');
innerImage.classList.add('effects__preview--none');

effectsList.addEventListener('change', (evt) => {
  effectLevelSlider.classList.remove('hidden');
  innerImage.classList = 'img-upload__preview';
  if (evt.target.value === 'none') {
    innerImage.style.removeProperty('filter');
    effectLevelSlider.classList.add('hidden');
    innerImage.classList.add('effects__preview--none');
  }
  innerImage.classList.add(`effects__preview--${evt.target.value}`);
});

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  // console.log(effectLevelValue.value);
});

effectsList.addEventListener('change', (evt) => {
  switch (evt.target.value) {
    case 'chrome' :
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      return оverlayEffects.chrome;
    case 'sepia':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      return оverlayEffects.sepia;
    case 'marvin':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100 ,
        },
        start: 100,
        step: 1,
      });
      return оverlayEffects.marvin;
    case 'phobos':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      return оverlayEffects.phobos;
    case 'heat':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      return оverlayEffects.heat;
  }
});

