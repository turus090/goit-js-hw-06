const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// function createGallery(input) {
//   const gallery = document.querySelector('.gallery');

//   let galleryItems = '';

//   input.forEach(item => {
//     const listItem = document.createElement('li');
//     const imageItem = document.createElement('img');
//     imageItem.src = item.url;
//     imageItem.alt = item.alt;

//     listItem.insertAdjacentHTML('beforeend', imageItem.outerHTML);

//     galleryItems += listItem.outerHTML;
//   })

//   //console.log(galleryItems);
//   gallery.innerHTML = galleryItems;
// }

// createGallery(images)

// v2

const ulEl = document.querySelector('.gallery');

images.forEach(el => {
  ulEl.insertAdjacentHTML(
    'afterbegin',
    `<li><img src = "${el.url}" alt = "${el.alt}"  width = "350" height = "250" /></li>`,
  );
}); 

//v3

// const imagesHtml  = images.reduce((result, image) => ${result}
// <div>
//   <img src='${image.url}' alt="${image.alt}">
//   </div>, '');

//   const container = document.querySelector(selectors: '.gallery');
//   container.insertAdjacentHTML(position: 'beforeend', imagesHtml);

//v4
// const MakeGalleryMarkUp = transaction => {
//   const { url, alt } = transaction;
//   return `<li class="item__image"> 
//   <img class = "image" src = '${url}' alt = '${alt}'/>
//   </li>`;
// }
// const listEl = document.querySelector('.gallery');

// const makeGallery = images.map(MakeGalleryMarkUp).join('');

// listEl.insertAdjacentHTML('afterbegin', makeGallery);
// console.log(makeGallery);