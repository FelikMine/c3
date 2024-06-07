const lazyImages = document.querySelectorAll("img[data-src]");
const windowHeight = document.documentElement.clientHeight;
let lazyImagesPositions = [];
if (lazyImages.length > 0) {
  lazyImages.forEach((img) => {
    if (img.dataset.src) {
      lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
      lazyScrollCheck();
    }
  });
}
console.log(lazyImagesPositions);
window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
  if (document.querySelectorAll("img[data-src]").length > 0) lazyScrollCheck();
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPositions.findIndex(
    (item) => pageYOffset > item - windowHeight
  );
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute("data-src");
      console.log("Загрузка" + lazyImages[imgIndex].innerHTML);
    }
    delete lazyImagesPositions[imgIndex];
  }
}

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  // centeredSlides: true,
  spaceBetween: -260,
  slidesOffsetBefore: -184,
  direction: "horizontal",
  loop: true,
  breakpoints: {
    320: {
      spaceBetween: -50,
    },
    800: {
      spaceBetween: -100,
    },
    1920: {
      spaceBetween: -260,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
