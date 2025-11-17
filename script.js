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
// Select all skill boxes
const skillBoxes = document.querySelectorAll(".skill");

skillBoxes.forEach((box) => {
  const percent = parseInt(box.dataset.value); 
  const textEl = box.querySelector(".spre");
  let animated = false;

  function animate() {
    let current = 0;

    const interval = setInterval(() => {
      current++;

      if (current > percent) {
        clearInterval(interval);
        return;
      }

      textEl.textContent = current + "%";
      box.style.background = `conic-gradient(#ea580c ${current * 3.6}deg, #0c0a09 0deg)`;
      textEl.style.visibility="visible";
    }, 15);
  }

  // Animation plays only once on hover
  box.addEventListener("mouseenter", () => {
    if (!animated) {
      animated = true;
      animate();
    }
  });

});
