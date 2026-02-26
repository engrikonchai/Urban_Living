// GALLERY
const gallery = document.getElementById('gallery');
const totalImages = 8;
let currentIndex = 0;
const images = [];

for (let i = 1; i <= totalImages; i++) {
  images.push({ day:`images/R${i}.jpg`, night:`images/R${i}N.jpg` });

  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';
  galleryItem.innerHTML = `
    <img class="day" src="images/R${i}.jpg" alt="R${i} Day">
    <img class="night" src="images/R${i}N.jpg" alt="R${i} Night">
  `;
  gallery.appendChild(galleryItem);
}

// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

document.querySelectorAll('.gallery-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = images[index].day;
    currentIndex = index;
  });
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => { if(e.target===lightbox) lightbox.style.display='none'; });

prevBtn?.addEventListener('click', () => {
  currentIndex = (currentIndex-1+images.length)%images.length;
  lightboxImg.src = images[currentIndex].day;
});

nextBtn?.addEventListener('click', () => {
  currentIndex = (currentIndex+1)%images.length;
  lightboxImg.src = images[currentIndex].day;
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuDim = document.getElementById('menuDim');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // animate X
  menuOverlay.classList.toggle('active'); // slide menu
  menuDim.classList.toggle('active'); // dim background
});

document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuDim.classList.remove('active');
  });
});

// SHRINK HEADER ON SCROLL
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});