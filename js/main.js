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

const IMAGE_COMMENTS_COUNT = 3;
const IMAGE_COUNT = 25;

const getMessage = function () {
  return MESSAGES[getNumber(MESSAGES.length - 1, 0)];
};

const getComment = function (id) {
  return {
    id,
    avatar: `img/avatar-${getNumber(6, 1)}.svg`,
    message: getMessage(),
    name: NAMES[getNumber(NAMES.length - 1, 0)],
  };
};

const createComments = function (count) {
  const comments = [];
  for (let i = 1; i <= count; i++) {
    comments.push(getComment(i));
  }
  return comments;
};

const imageComments = createComments(IMAGE_COMMENTS_COUNT);


const getImageProperties = function (id) {
  return {
    id,
    url: `photos/${id}.jpg`,
    description: 'Это фото просто пушка, бомба, петарда!',
    likes: getNumber(200, 15),
    comments: imageComments
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

console.log(getMessage());
console.log(getComment());
console.log(imageComments);
console.log(allImages);
