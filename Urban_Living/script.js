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

document.querySelectorAll('.btn-apartments').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // stop instant navigation
    const link = this.getAttribute('href'); // get the target page
    document.getElementById('pageWrapper').classList.add('fade-out'); // start fade
    setTimeout(() => {
      window.location.href = link; // navigate after fade
    }, 500); // match the CSS transition duration
  });
});
