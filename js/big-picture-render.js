import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const socialCommentCount = document.querySelector('.social__comment-count');
socialCommentCount.innerHTML = '<span class="visible-comments-count"></span> из <span class="comments-count"></span> комментариев';
const visibleCommentsCount = document.querySelector('.visible-comments-count');
const visibleComments = bigPicture.querySelector('.social__comments');
const commentsCount =  bigPicture.querySelector('.comments-count');
const commentsLoaderButton = document.querySelector('.comments-loader');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const picturesList = document.querySelector('.pictures');
let photoComments = [];

function onBigPictureEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureClose();
  }
}

function bigPictureClose() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  bigPictureCloseButton.removeEventListener('click', bigPictureClose);
  document.removeEventListener('keydown', onBigPictureEscKeydown);

  photoComments = [];
  commentsLoaderButton.removeEventListener('click', loadMoreComments);
}

function bigPictureOpen() {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsLoaderButton.classList.remove('hidden');

  bigPictureCloseButton.addEventListener('click', bigPictureClose);
  document.addEventListener('keydown', onBigPictureEscKeydown);
  commentsLoaderButton.addEventListener('click', loadMoreComments);
}

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
  commentsCount.textContent = comments.length;
  bigPicture.querySelector('.social__comments').textContent = '';
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPictureOpen();
}

function loadMoreComments() {
  if (photoComments.length === 0) {
    visibleCommentsCount.textContent = '0';
    commentsLoaderButton.classList.add('hidden');
    commentsLoaderButton.removeEventListener('click', loadMoreComments);
    return;
  }

  if (photoComments.length <= 5) {
    visibleCommentsCount.textContent = commentsCount.textContent;
    commentsLoaderButton.classList.add('hidden');
    commentsLoaderButton.removeEventListener('click', loadMoreComments);
    visibleComments.appendChild(createSocialComments(photoComments));
    return;
  }

  visibleCommentsCount.textContent = visibleComments.children.length + 5;
  visibleComments.appendChild(createSocialComments(photoComments.splice(0, 5)));

  commentsLoaderButton.addEventListener('click', loadMoreComments);

}


function initBigPicture(allImages) {
  picturesList.addEventListener('click', (evt) => {
    const id = evt.target.dataset.id;
    if (id) {
      const photo = allImages.find((item) => item.id === parseInt(id, 10));
      bigPictureRender(photo);
      photoComments = photo.comments.slice();
      loadMoreComments();
    }
  });
}

export {initBigPicture};
