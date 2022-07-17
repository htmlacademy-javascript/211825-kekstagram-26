import {picturesList} from './thumbnails-render.js';
import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const getSingleComment = function ({ avatar, message, name }) {
  const bigPictureComment = document.createElement('li');
  bigPictureComment.classList.add('.social__comment');
  const socialPicture = document.createElement('img');
  socialPicture.classList.add('.social__picture');
  socialPicture.src = avatar;
  socialPicture.alt = name;
  socialPicture.width = 35;
  socialPicture.height = 35;
  const socialText = document.createElement('p');
  socialText.classList.add('social__text');
  socialText.textContent = message;
  bigPictureComment.append(socialPicture, socialText);
  return bigPictureComment;
};

const createSocialComments = function (array) {
  const socialComments = [];
  for (let i = 0; i < array.length; i++) {
    socialComments.push(getSingleComment[i]);
  }
  return socialComments;
};

const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');

const bigPictureClose = function () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

bigPictureCloseButton.addEventListener('click', bigPictureClose);

bigPictureCloseButton.addEventListener('click', bigPictureClose);
document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureClose();
  }
});

const bigPictureOpen = function () {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
};

const bigPictureRender = function ({url, likes, comments, description}) {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__comments').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comments').appendChild(createSocialComments(comments));
  bigPictureOpen();
};

picturesList.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.id) {
    const picturesListArray = picturesList.children;
    picturesListArray.find(
      (item) => {
        if (item.id === evt.target.id) {
          bigPictureRender(item);
        }
      });
  }
});


// const picturesListArray = picturesList.children;
// console.log(picturesListArray);

export {bigPictureRender};

// получаешь id от евент таргет. И по массиву ищешь методом find()
// делай проверку на айди
// И когда найдешь нужный обьект с фото его передаешь функции рендера.
