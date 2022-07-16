import {bigPictureRender} from './big-picture-render';

const thumbnailsRender = function (photoArray) {
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const picturesList = document.querySelector('.pictures');

  const picturesListFragment = document.createDocumentFragment();

  photoArray.forEach(({url, comments, likes}) => {
    const singlePicture = pictureTemplate.cloneNode(true);
    singlePicture.querySelector('.picture__img').src = url;
    singlePicture.querySelector('.picture__comments').textContent = comments.length;
    singlePicture.querySelector('.picture__likes').textContent  = likes;
    picturesListFragment.appendChild(singlePicture);
    singlePicture.addEventListener('click', bigPictureRender);
  });
  picturesList.appendChild(picturesListFragment);
};

export {thumbnailsRender};
