import {allImages} from './data.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesList = document.querySelector('.pictures');

const gallery = allImages;

const picturesListFragment = document.createDocumentFragment();

gallery.forEach(({url, comments, likes}) => {
  const singlePicture = pictureTemplate.cloneNode(true);
  singlePicture.querySelector('.picture__img').src = url;
  singlePicture.querySelector('.picture__comments').textContent = comments.length;
  singlePicture.querySelector('.picture__likes').textContent  = likes;
  picturesListFragment.appendChild(singlePicture);
});

picturesList.appendChild(picturesListFragment);
