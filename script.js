// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
});

const words = ["A Fullstack Developer", "Designer", "A App Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];

  if (!isDeleting) {
    document.getElementById("text").textContent = currentWord.slice(0, ++j);
    if (j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("text").textContent = currentWord.slice(0, --j);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();
