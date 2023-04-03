import { galleryItems } from './gallery-items.js';
const lstIimg = document.querySelector('.gallery');

const li = galleryItems.map(img=>`
    <li class="gallery__item">
    <a class="gallery__link" href=${img.original}>
            <img
                class="gallery__image"
                src=${img.preview}
                data-source=${img.original}
                alt=${img.description}
  />
</a>
</li>`).join("");


function imgClick (event){
    event.preventDefault();
    const imgOriginalURL = event.target.dataset.source;
    basicLightbox.create(`<img src=${imgOriginalURL}>`).show();  
}

lstIimg.innerHTML=li;
lstIimg.addEventListener('click', imgClick);

//console.log(galleryItems);


