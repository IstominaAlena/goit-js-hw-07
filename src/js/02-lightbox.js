import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCards = createGalleryItems(galleryItems);
const galleryList = document.querySelector('.gallery');
// Создание разметки для карточек
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="" title="${description}" />
</a>
    `;
    })
    .join('');
}

galleryList.insertAdjacentHTML('beforeend', galleryCards);

new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
});
