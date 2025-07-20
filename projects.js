const carousel = document.querySelector('.project-carousel');

// Duplicate cards once to allow smooth infinite scroll
carousel.innerHTML += carousel.innerHTML;

let position = 0;
const speed = 1.2; // pixels per frame

function animate() {
  position -= speed;

  if (position <= -carousel.scrollWidth / 2) {
    position = 0;
  }

  carousel.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
