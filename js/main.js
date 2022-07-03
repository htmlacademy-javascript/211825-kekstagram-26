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

getNumber();
checkLength('test', 5);

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Шелдон',
  'Тони',
  'Степан',
  'Наталья',
  'Пенни',
  'Юлия',
  'Тимур',
  'Аида'
];

const DESCRIPTIONS = [
  'Это фото просто пушка, бомба, петарда!',
  'Привет из Вологды!',
  'Случайный ренессанс',
  'Встал с утра - сделал селфи! ',
  'Что-то такое, ну как вам?'
];

const IMAGE_COUNT = 25;

const getElementFromArray = function (array) {
  return array[getNumber(array.length - 1, 0)];
};

let commentId = 1;

const getComment = function () {
  return {
    id: commentId++,
    avatar: `img/avatar-${getNumber(6, 1)}.svg`,
    message: getElementFromArray(MESSAGES),
    name: getElementFromArray(NAMES),
  };
};

// const createComments = function (count) {
//   const comments = [];
//   for (let i = 1; i <= count; i++) {
//     comments.push(getComment(i));
//   }
//   return comments;
// };

// const imageComments = createComments(IMAGE_COMMENTS_COUNT);


const getImageProperties = function (id) {
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getElementFromArray(DESCRIPTIONS),
    likes: getNumber(200, 15),
    comments: Array.from({length: getNumber(5, 1)}, getComment)
  };
};

const createImages = function (count) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(getImageProperties(i));
  }
  return images;
};
const allImages = createImages(IMAGE_COUNT);

// eslint-disable-next-line no-console
console.log(allImages);

