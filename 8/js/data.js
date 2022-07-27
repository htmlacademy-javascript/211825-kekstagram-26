import {getNumber, getElementFromArray} from './util.js';

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

let commentId = 1;

function getComment() {
  return {
    id: commentId++,
    avatar: `img/avatar-${getNumber(6, 1)}.svg`,
    message: getElementFromArray(MESSAGES),
    name: getElementFromArray(NAMES),
  };
}

function getImageProperties(id) {
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getElementFromArray(DESCRIPTIONS),
    likes: getNumber(200, 15),
    comments: Array.from({ length: getNumber(15, 1) }, getComment)
  };
}

function createImages(count) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(getImageProperties(i));
  }
  return images;
}
const allImages = createImages(IMAGE_COUNT);

export {allImages};
