import {allImages} from './data.js';
import {thumbnailsRender} from './thumbnails-render.js';
import {initBigPicture} from './big-picture-render.js';
import {onUploadFileChange} from './validate-form.js';

thumbnailsRender(allImages);
initBigPicture(allImages);
onUploadFileChange();
