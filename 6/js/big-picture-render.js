import {picturesList} from './thumbnails-render.js';
import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');

function onBigPictureEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureClose();
  }
}

function bigPictureClose() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

function bigPictureOpen() {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onBigPictureEscKeydown);
}

bigPictureCloseButton.addEventListener('click', () => {
  bigPictureClose();
});

function getSingleComment({ avatar, message, name }) {
  const bigPictureComment = document.createElement('li');
  bigPictureComment.classList.add('social__comment');
  const socialPicture = document.createElement('img');
  socialPicture.classList.add('social__picture');
  socialPicture.src = avatar;
  socialPicture.alt = name;
  socialPicture.width = 35;
  socialPicture.height = 35;
  const socialText = document.createElement('p');
  socialText.classList.add('social__text');
  socialText.textContent = message;
  bigPictureComment.append(socialPicture, socialText);
  return bigPictureComment;
}

function createSocialComments(comments) {
  const socialComments = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++) {
    socialComments.appendChild(getSingleComment(comments[i]));
  }
  return socialComments;
}

function bigPictureRender({ url, likes, comments, description }) {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__comments').textContent = '';
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comments').appendChild(createSocialComments(comments));
  bigPictureOpen();
}

function initBigPicture(allImages) {
  picturesList.addEventListener('click', (evt) => {
    const id = evt.target.dataset.id;
    if (id) {
      const photo = allImages.find((item) => item.id === parseInt(id, 10));
      bigPictureRender(photo);
    }
  });
}

export {initBigPicture};
