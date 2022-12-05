// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const imgContainerRef = document.querySelector('.gallery');
const imagesMarkup = makeMarkup(galleryItems);

imgContainerRef.insertAdjacentHTML('beforeend', imagesMarkup);
imgContainerRef.addEventListener('click', e => e.preventDefault());

function makeMarkup(obj) {
    return obj.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>  
        `
    }).join('');
}

new SimpleLightbox('.gallery a', {
    'captionsData': 'alt',
})