import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

// Создание разметки для карточек
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    `;
    })
    .join('');
}

const galleryCards = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryCards);

// Делегирование событий

galleryList.addEventListener('click', onGalleryCardClick);

function onGalleryCardClick(evt) {
  evt.preventDefault();
  window.addEventListener('keydown', closeModalByEsc);
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const contentForModal = evt.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src="${contentForModal}" width="800" height="600">
  `);

  openModalFn(instance);

  function closeModalByEsc(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}

// Модальное окно
function openModalFn(instance) {
  instance.show();
}
