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

// Mobile tap toggle Day ↔ Night
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', (e) => {

    // Prevent double triggering if needed later
    e.stopPropagation();

    const dayImg = item.querySelector('.day');
    const nightImg = item.querySelector('.night');

    const isNightVisible = nightImg.style.opacity === "1";

    if (isNightVisible) {
      // Switch back to day
      nightImg.style.opacity = "0";
      dayImg.style.opacity = "1";
    } else {
      // Switch to night
      nightImg.style.opacity = "1";
      dayImg.style.opacity = "0";
    }

  });
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

const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuOverlay.classList.remove('active');
  menuDim.classList.remove('active');
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

// Floor Filter (append at the end of your existing script.js)
const floorButtons = document.querySelectorAll('.floor-btn');
const apartmentCards = document.querySelectorAll('.apartment-card');

floorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    floorButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedFloor = btn.getAttribute('data-floor');

    apartmentCards.forEach(card => {
      if (card.getAttribute('data-floor') === selectedFloor) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
