// --- DETERMINE PAGE ---
const bodyId = document.body.id;

// --- GALLERY (only on main page) ---
if(bodyId === 'top') {
  const gallery = document.getElementById('gallery');
  const totalImages = 8;

  for (let i = 1; i <= totalImages; i++) {
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
    item.addEventListener('click', () => {
      const dayImg = item.querySelector('.day');
      const nightImg = item.querySelector('.night');
      if (nightImg.style.opacity === "1") {
        nightImg.style.opacity = "0";
        dayImg.style.opacity = "1";
      } else {
        nightImg.style.opacity = "1";
        dayImg.style.opacity = "0";
      }
    });
  });
}

// --- HAMBURGER MENU (works on both pages) ---
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuDim = document.getElementById('menuDim');
const closeBtn = document.getElementById('closeBtn');

if(hamburger && menuOverlay && menuDim) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    menuDim.classList.toggle('active');
  });
  closeBtn.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuDim.classList.remove('active');
  });
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menuOverlay.classList.remove('active');
      menuDim.classList.remove('active');
    });
  });
}

// --- SHRINK HEADER ---
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if(header) {
    if(window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
});

// --- STANOVI POPUP (only on main page) ---
if(bodyId === 'top') {
  const floorModal = document.getElementById('floorModal');
  const openFloorsBtn = document.getElementById('openFloors');
  const closeModalBtn = document.getElementById('closeModal');
  const floorListItems = document.querySelectorAll('.floor-list li');

  if(openFloorsBtn) {
    openFloorsBtn.addEventListener('click', e => {
      e.preventDefault();
      floorModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  if(closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      floorModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }
  if(floorModal) {
    floorModal.addEventListener('click', e => {
      if(e.target === floorModal) {
        floorModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Floor click → go to apartments.html#floorX
  floorListItems.forEach(item => {
    item.addEventListener('click', () => {
      const floor = item.getAttribute('data-floor');
      window.location.href = `apartments.html#floor${floor}`;
    });
  });
}

// --- SMOOTH SCROLL ON APARTMENTS PAGE ---
if(bodyId === 'apartments') {
  window.addEventListener('DOMContentLoaded', () => {
    if(window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
