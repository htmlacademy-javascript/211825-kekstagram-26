import {allImages} from './data.js';
import {thumbnailsRender} from './thumbnails-render.js';
import {initBigPicture} from './big-picture-render.js';

thumbnailsRender(allImages);
initBigPicture(allImages);
