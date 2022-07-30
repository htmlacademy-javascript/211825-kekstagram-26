import {allImages} from './data.js';
import {thumbnailsRender} from './thumbnails-render.js';
import {initBigPicture} from './big-picture-render.js';
import {formRender} from './validate-form.js';
import './scale-editor.js';
import './picture-effect-overlay.js';

thumbnailsRender(allImages);
initBigPicture(allImages);
formRender();
