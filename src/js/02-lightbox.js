// import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryList: document.querySelector('.gallery'),
  galleryCards: createGalleryItems(galleryItems),
};

// Создание разметки для карточек
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join('');
}

refs.galleryList.insertAdjacentHTML('beforeend', refs.galleryCards);

refs.galleryList.addEventListener('click', onGalleryCardClick);

function onGalleryCardClick(evt) {
  evt.preventDefault();
  const contentForModal = evt.target.parentNode.href;
  console.log(contentForModal);
}
