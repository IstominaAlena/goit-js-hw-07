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

refs.galleryList.insertAdjacentHTML('beforeend', refs.galleryCards);

// Делегирование событий

refs.galleryList.addEventListener('click', onGalleryCardClick);

function onGalleryCardClick(evt) {
  evt.preventDefault();
  window.addEventListener('keydown', onModalCloseByEscPress);
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const contentForModal = evt.target.dataset.source;
  openModalFn(contentForModal);
  console.log(contentForModal);
}

// Модальное окно
function openModalFn(content) {
  const instance = basicLightbox.create(`
    <img src="${content}" width="800" height="600">
`);

  instance.show();
}
