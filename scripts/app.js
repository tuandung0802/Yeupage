// document.addEventListener("DOMContentLoaded", function () {
//   const menuOpen = document.querySelector(".menu-toggle");
//   const menuClose = document.querySelector(".menu-close");
//   const menu = document.querySelector(".menu");
//   if (!menuOpen || !menuClose || !menu) return;
//   menuOpen.addEventListener("click", function () {
//     menu.classList.add("is-active");
//   });
//   menuClose.addEventListener("click", function () {
//     menu.classList.remove("is-active");
//   });
//   document.addEventListener("click", function (e) {
//     if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//       menu.classList.remove("is-active");
//     }
//   });
// });
const carouselSlide = document.querySelector('.carousel-slide');
const carouseImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouseImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';





nextBtn.addEventListener('click', () => {
  carouselSlide.style.transition="transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});