
const picturesList = document.querySelector('.pictures');

function thumbnailsRender(photoArray) {
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');


  const picturesListFragment = document.createDocumentFragment();

  photoArray.forEach(({ url, comments, likes, id }) => {
    const singlePicture = pictureTemplate.cloneNode(true);
    singlePicture.querySelector('.picture__img').src = url;
    singlePicture.querySelector('.picture__comments').textContent = comments.length;
    singlePicture.querySelector('.picture__likes').textContent = likes;
    picturesListFragment.appendChild(singlePicture);
    singlePicture.querySelector('.picture__img').dataset.id = id;
  });
  picturesList.appendChild(picturesListFragment);
}

export {thumbnailsRender, picturesList};
